// web sever
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import connectMongo from 'connect-mongo'

import session from 'express-session'
import multer from 'multer'
import FTPStorage from 'multer-ftp'
import md5 from 'md5'
import path from 'path'
import dotenv from 'dotenv'
import db from './db.js'
import fs from 'fs'

const app = express()
const MongoStore = connectMongo(session)

dotenv.config()
// 讓 express 使用 body-parser，並把收到的資料轉 json
app.use(bodyParser.json())

// 跨網域
app.use(cors({
  // origin 為請求來源網域, callback 為是否允許的回應
  origin (origin, callback) {
    // 允許任何來源網域的請求
    if (origin === undefined) {
      callback(null, true)
    } else {
      if (process.env.ALLOW_CORS === 'true') {
        // 開發環境，允許
        callback(null, true)
      } else if (origin.includes('github')) {
        // 非開發環境，但是 是從github過來的，允許
        callback(null, true)
      } else {
        // 不是開發環境，也不是從github過來的，拒絕
        callback(new Error('Not allowed'), false)
      }
    }
  },
  // 允許跨域認證
  credentials: true
}))

app.use(session({
  // This is the secret used to sign the session ID cookie.
  // 拿來加密的東西，用來加密跟解密
  secret: 'tty',
  // 把session 存到mongodb裡面
  store: new MongoStore({
    // 使用Mongoose 的資料庫連接
    mongooseConnection: db.connection,
    // 跟mongostore 說session 要存在哪個資料表裡面
    // 因為雲端只有一個資料庫，所以加 前贅詞
    // 設定存入的資料表
    collection: process.env.COLLECTION_SESSION
  }),
  // session 有效時間，讓登入狀態維持1hr
  cookie: {
    // 1000毫秒=1秒
    // 1000毫秒*60=1分
    // 1000毫秒*60*60=1hr
    maxAge: 1000 * 60 * 60
  },
  // 是否保存未修改的session
  saveUninitialized: false,
  // 是否每次重設過期時間
  rolling: true,
  resave: true

}))

let storage
if (process.env.FTP === 'false') {
  // 開發環境將上傳檔案放本機
  storage = multer.diskStorage({
    destination (req, file, cb) {
      cb(null, 'images/')
    },
    filename (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname))
    }
  })
} else {
  // heroku 將上傳檔案放伺服器
  storage = new FTPStorage({
    // 上傳伺服器的路徑
    basepath: '/',
    // FTP 設定
    ftp: {
      host: process.env.FTP_HOST,
      secure: false,
      user: process.env.FTP_USER,
      password: process.env.FTP_PASSWORD
    },
    destination (req, file, options, cb) {
      cb(null, options.basepath + Date.now() + path.extname(file.originalname))
    }
  })
}

const upload = multer({
  storage,
  fileFilter (req, file, cb) {
    if (!file.mimetype.includes('image')) {
      // 觸發 multer 錯誤，不接受檔案
      // LIMIT_FORMAT 是自訂的錯誤 CODE，跟內建的錯誤 CODE 格式統一
      cb(new multer.MulterError('LIMIT_FORMAT'), false)
    } else {
      cb(null, true)
    }
  },
  limits: {
    fileSize: 1024 * 1024
  }
})

app.listen(process.env.PORT, () => {
  console.log('已啟動')
})

// 請求方式為 POST，路徑為 /users
// 後端對註冊的回應
app.post('/users', async (req, res) => {
  // 如果進來的資料型態不是json
  if (!req.headers['content-type'].includes('application/json')) {
    // 回傳錯誤狀態碼
    res.status(400)
    res.send({ success: false, message: '使用者格式不符' })
    return
  }
  // 新增資料
  try {
    const result = await db.users.create({
      account: req.body.account,
      password: md5(req.body.password),
      email: req.body.email
    })
    res.status(200)
    res.send({ success: true, message: '', result })
  } catch (error) {
    // console.log(error)
    // 區分是誰的問題
    // 資料格式錯誤 (使用者輸入錯誤) ValidationError
    if (error.name === 'ValidationError') {
      // 錯誤的訊息的 key 值為欄位名稱，不固定
      // 所以用 Object.keys(err.errors)[0] 取得第一個 key 值
      const key = Object.keys(error.errors)[0]
      const message = error.errors[key].message
      res.status(400)
      res.send({ success: false, message })
    } else {
      // 伺服器錯誤 referenceError
      res.status(500)
      res.send({ success: false, message: '在postusers時伺服器錯誤' })
    }
  }
})

// 新增資料
// 登入的後台
app.post('/login', async (req, res) => {
  if (!req.headers['content-type'].includes('application/json')) {
    res.status(400)
    res.send({ success: false, message: '使用者登入格式不符' })
    return
  }
  try {
    // 去資料庫找使用者 ，result 為查詢的結果
    const result = await db.users.find(
      {
      // 查詢的條件
        account: req.body.account,
        password: md5(req.body.password)
      // 看加密後的資料是否一樣
      }
    )
    if (result.length > 0) {
      // 有結果的話， 在serve的變數叫user
      // 內容是result[0].account 結果的第一筆帳號
      console.log(result)
      req.session.user = result[0].account
      res.status(200)
      // 也要把找到的所有資料傳出去 result
      res.send({ success: true, message: '', result })
      // console.log(req.session)
    } else {
      res.status(404)
      res.send({ success: false, message: '帳號密碼登入錯誤' })
    }
  } catch (error) {
    // 區分是誰的問題
    // 資料格式錯誤 (使用者輸入錯誤) ValidationError
    if (error.name === 'ValidationError') {
      const key = Object.keys(error.errors)[0]
      const message = error.errors[key].message
      res.status(400)
      res.send({ success: false, message })
    } else {
      // 伺服器錯誤 referenceError
      res.status(500)
      res.send({ success: false, message: '在postlogin時伺服器錯誤' })
    }
  }
})

// 登出
app.delete('/logout', async (req, res) => {
  // 把目前的狀態清除，知道是誰進來
  req.session.destroy(error => {
    if (error) {
      // 沒有要傳東西進來，所以會是伺服器的問題
      res.status(500)
      res.send({ success: false, message: '伺服器登出錯誤' })
    } else {
      // 清空 cookie，清空瀏覽器的驗證資訊
      res.clearCookie()
      res.status(200)
      res.send({ success: true, message: '' })
    }
  })
})

// 因為前端在瀏覽器的localstorage 裡面 ，所以前端不知道後端過期
// 用下列方式，讓後端知道使用者的狀態，不會讓後端因為一小時沒有操作而過期
// 目前的狀態，若有登入，則在把時效重新計算
app.get('/heartbeat', async (req, res) => {
  let islogin = false
  // 在登入時，有把使用者的帳號存進來
  if (req.session.user !== undefined) {
    islogin = true
  }
  res.status(200)
  res.send(islogin)
  // res.send(req.session.user !== undefined)
})

// 修改會員資料
app.patch('/memberData/:id', async (req, res) => {
  if (!req.headers['content-type'].includes('application/json')) {
    res.status(400)
    res.send({ success: false, message: '會員資料格式不符' })
    return
  }
  // 沒有登入
  // if (!req.session.user) {
  //   res.status(401)
  //   res.send({ success: false, message: '無權限' })
  //   return
  // }
  try {
    console.log(req.body)
    const result = await db.users.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200)
    res.send({ success: true, message: '', result })
  } catch (error) {
    if (error.name === 'CastError') {
      // ID格式不是MongoDB格式
      res.status(400)
      res.send({ success: false, message: 'ID格式錯誤' })
    } else if (error.name === 'ValidationError') {
      const key = Object.keys(error.errors)[0]
      const message = error.errors[key].message
      res.status(400)
      res.send({ success: false, message })
    } else {
      // 伺服器錯誤
      res.status(500)
      res.send({ success: false, message: '伺服器錯誤' })
    }
  }
})

// 新增商品
app.post('/file', async (req, res) => {
  // 沒有登入
  if (req.session.user === undefined) {
    res.status(401)
    res.send({ success: false, message: '未登入' })
    return
  }
  if (!req.headers['content-type'].includes('multipart/form-data')) {
    res.status(400)
    res.send({ success: false, message: '格式不符' })
    return
  }

  // 有一個上傳進來的檔案，欄位是 image
  // req，進來的東西
  // res，要出去的東西
  // err，檔案上傳的錯誤
  // upload.single(欄位)(req, res, 上傳完畢的 function)
  upload.single('image')(req, res, async error => {
    console.log(error)
    if (error instanceof multer.MulterError) {
      // 上傳錯誤
      let message = ''
      if (error.code === 'LIMIT_FILE_SIZE') {
        message = '檔案太大'
      } else {
        message = '格式不符'
      }
      res.status(400)
      res.send({ success: false, message })
    } else if (error) {
      res.status(500)
      res.send({ success: false, message: '伺服器錯誤' })
    } else {
      try {
        let name = ''
        if (process.env.FTP === 'true') {
          name = path.basename(req.file.path)
        } else {
          name = req.file.filename
        }
        const result = await db.productPictures.create(
          {
            user: req.session.user,
            description: req.body.description,
            name
          }
        )
        res.status(200)
        res.send({ success: true, message: '', name, _id: result._id })
      } catch (error) {
        if (error.name === 'ValidationError') {
          // 資料格式錯誤
          const key = Object.keys(error.errors)[0]
          const message = error.errors[key].message
          res.status(400)
          res.send({ success: false, message })
        } else {
          console.log(error)
          // 伺服器錯誤
          res.status(500)
          res.send({ success: false, message: '伺服器錯誤' })
        }
      }
    }
  })
})

app.get('/file/:name', async (req, res) => {
  if (req.session.user === undefined) {
    res.status(401)
    res.send({ success: false, message: '未登入' })
    return
  }
  if (process.env.FTP === 'false') {
    const path = process.cwd() + '/images/' + req.params.name
    const exists = fs.existsSync(path)
    if (exists) {
      res.status(200)
      res.sendFile(path)
    } else {
      res.status(404)
      res.send({ success: false, message: '找不到圖片' })
    }
  } else {
    res.redirect('http://' + process.env.FTP_HOST + '/' + process.env.FTP_USER + '/' + req.params.name)
  }
})
