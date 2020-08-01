// 資料庫套件
import mongoose from 'mongoose'

import dotenv from 'dotenv'
// 引用重複驗證套件(讓mongoose 支援unique 錯誤訊息)
import beautifyUnique from 'mongoose-beautiful-unique-validation'
import validator from 'validator'

dotenv.config()

const Schema = mongoose.Schema
// 連接資料庫
mongoose.connect(process.env.DBURL)
// 使用插件
mongoose.plugin(beautifyUnique)

// 定義資料表的架構
const userSchema = new Schema({
  // 要有那些東西
  // 帳號
  account: {
    // 資料類型是文字
    type: String,
    minlength: [4, '帳號必須4個字以上'],
    maxlength: [20, '帳號必須20個字以下'],
    // 必填欄位，自訂錯誤訊息
    required: [true, '帳號必填'],
    // 獨特性，避免重複，無法自訂錯誤訊息，除非使用套件beautifyUnique
    unique: '帳號已使用'
  },
  password: {
    type: String,
    // 會透過md5 去亂碼
    required: [true, '密碼必填']
  },
  email: {
    type: String,
    required: [true, '信箱必填'],
    // 自訂驗證規則 塞資料庫時也一起驗證
    validate: {
      // 驗證function ，mongoose 寫法
      validator (value) {
        // 使用 驗證套件檢查是否為Email，套件，是的話為true
        return validator.isEmail(value)
      },
      // 錯誤訊息
      message: '信箱格式錯誤'
    },
    unique: '信箱帳號已使用'
  },
  name: {
    type: String
  },
  address: {
    type: String
  },
  cellphone: {
    type: Number,
    maxlength: [10, '電話號碼最多10個字'],
    validate (value) {
      return validator.isMobilePhone(value)
    },
    message: '電話格式錯誤'
  }
}, {
  // 不讓mongoose 顯示修改次數
  versionKey: false
})

const productPictureSchema = new Schema({
// 放上傳的id
  user: {
    type: String,
    required: [true, '沒有使用者名稱']
  },
  name: {
    type: String,
    name: [2, '商品名稱至少兩個字'],
    required: [true, '商品名稱必填']
  },
  description: {
    type: String,
    minlength: [2, '商品描述最少2個字'],
    maxlength: [300, '商品描述最多300個字'],
    requried: [true, '商品描述必填']
  }
})

// model():資料表名稱對應到上面的 Schema
// 資料表變數 = mongoose.model(資料表名稱[要複數],對應的Schema)
// 在本機可以 一個網頁一個資料庫
// 在雲端(mongoDB)只有一個資料庫，所以會有多個資料表
// 建議加前贅詞
const users = mongoose.model(process.env.COLLECTION_USER, userSchema)
const productPictures = mongoose.model(process.env.COLLECTION_PRODUCTIONPICTURE, productPictureSchema)
const connection = mongoose.connection

// 匯出的格式是json
export default {
  // 要匯出的變數
  users,
  productPictures,
  connection
}
