<template>
  <div id="reg" :style="{backgroundImage:`url('./images/bg.jpg')`}">
    <div class="container">
      <div class="base">
        <div v-if="signUp">
          <div class="aim">
            <h2>成為會員</h2>
            <p>讓我們一起購買周邊商品，去球場為她加油~</p>
            <button @click="signUp= !signUp" class="btn">已成為會員</button>
          </div>
          <!-- <h1 class="text-center col-12">註冊</h1> -->
          <!-- <div class="justify-content-center row"> -->

          <b-form class="col-6 formArea" @submit="submitReg">
            <b-form-group label="帳號" label-for="input-accountReg" invalid-feedback="帳號長度為4 - 20個字" :state="state('input-accountReg')">
              <b-form-input id="input-accountReg" v-model="accountReg" type="text" placeholder="請輸入帳號" :state="state('input-accountReg')" size="sm" ></b-form-input>
            </b-form-group>
            <b-form-group label="密碼" label-for="input-passwordReg" invalid-feedback="密碼長度為4 - 20個字" :state="state('input-passwordReg')" >
              <b-form-input id="input-passwordReg" type="password" v-model="passwordReg" placeholder="請輸入密碼" :state="state('input-passwordReg')" size="sm"></b-form-input>
            </b-form-group>
            <b-form-group label="再次輸入密碼" label-for="input-againpw" invalid-feedback="密碼需一致" :state="state('input-againpw')">
              <b-form-input id="input-againpw" type="password" v-model="againpw" placeholder="請再次輸入密碼" :state="state('input-againpw')" size="sm"></b-form-input>
            </b-form-group>
            <b-form-group label="電子郵件地址" label-for="input-email">
              <b-form-input id="input-email" type="email" v-model="email" placeholder="請輸入電子郵件地址" size="sm" required></b-form-input>
            </b-form-group>
            <!-- <div class="d-flex flex-column flex-md-row flex-row no-gutters ">
              <b-form-group label="姓氏" label-for="input-lastName" class="col-6" label-cols-sm="1" label-cols-md="3">
                <b-form-input id="input-lastName" type="text" v-model="lastName" placeholder="請輸入姓氏" size="sm"></b-form-input>
              </b-form-group>
              <b-form-group label="姓名" label-for="input-firstName" class="col-6 ml-lg-3" label-cols-sm="1" label-cols-md="3">
                <b-form-input id="input-firstName" type="text" v-model="firstName" placeholder="請輸入姓名" size="sm"></b-form-input>
              </b-form-group>
            </div> -->
            <b-button type="submit" variant="ccc">註冊</b-button>

          </b-form>
          <!-- </div> -->
        </div>

        <div v-else>
          <div class="aim in">
            <h2>歡迎回來</h2>
            <p>看看新上架的商品</p>
            <button @click="signUp= !signUp" class="btn">還未成為會員嗎?</button>
          </div>
          <!-- <h1 class="text-center col-12">登入</h1> -->
          <b-form class="col-6 formArea in" @submit="submitSignin">
            <b-form-group label="帳號" label-for="input-accountSignin" invalid-feedback="帳號長度為4 - 20個字" :state="state('input-accountSignin')">
              <b-form-input id="input-accountSignin" v-model="accountSignin" type="text" placeholder="請輸入帳號" :state="state('input-accountSignin')"></b-form-input>
            </b-form-group>
            <b-form-group label="密碼" label-for="input-passwordSignin" invalid-feedback="密碼長度為4 - 20個字" :state="state('input-passwordSignin')">
              <b-form-input id="input-passwordSignin" type="password" v-model="passwordSignin" placeholder="請輸入密碼" :state="state('input-passwordSignin')"></b-form-input>
            </b-form-group>
            <b-button type="submit">登入</b-button>
          </b-form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'reg',
  data () {
    return {
      accountReg: '',
      passwordReg: '',
      accountSignin: '',
      passwordSignin: '',
      againpw: '',
      email: '',
      signUp: true
      // ismove: true
    }
  },
  computed: {

  },
  methods: {
    state (id) {
      if (id === 'input-accountReg') {
        if (this.accountReg.length === 0) {
          return null
        } else if (this.accountReg.length < 4 || this.accountReg.length > 20) {
          return false
        } else {
          return true
        }
      } else if (id === 'input-passwordReg') {
        if (this.passwordReg.length === 0) {
          return null
        } else if (this.passwordReg.length < 4 || this.passwordReg.length > 20) {
          return false
        } else {
          return true
        }
      } else if (id === 'input-againpw') {
        if (this.againpw.length === 0) {
          return null
        } else if (this.againpw.length < 4 || this.againpw.length > 20) {
          return false
        } else if (this.passwordReg !== this.againpw) {
          return false
        } else {
          return true
        }
      } else if (id === 'input-accountSignin') {
        if (this.accountSignin.length === 0) {
          return null
        } else if (this.accountSignin.length < 4 || this.accountSignin.length > 20) {
          return false
        } else {
          return true
        }
      } else if (id === 'input-passwordSignin') {
        if (this.passwordSignin.length === 0) {
          return null
        } else if (this.passwordSignin.length < 4 || this.passwordSignin.length > 20) {
          return false
        } else {
          return true
        }
      }
    },
    submitReg (event) {
      // 對事件作處理
      // 不要他導向到action的頁面
      event.preventDefault()
      // 要擋三層 輸入 前台 後台
      // 下列是 送出時 前台再擋一次
      if (this.accountReg.length < 4 || this.accountReg.length > 20) {
        this.$swal.fire({
          icon: 'error',
          text: '帳號格式不符'
        })
      } else if (this.passwordReg.length < 4 || this.passwordReg.length > 20) {
        this.$swal.fire({
          icon: 'error',
          text: '密碼格式不符'
        })
      }
      // 送去 後台的網址
      this.axios.post(process.env.VUE_APP_APIURL + '/users', { account: this.accountReg, password: this.passwordReg, email: this.email })
        .then(response => {
          // 如果回來的資料 success 是 true
          const data = response.data
          if (data.success) {
            // alert('註冊成功')
            this.$swal.fire({
              icon: 'success',
              text: '註冊成功'
            })
            this.accountReg = ''
            this.passwordReg = ''
            this.againpw = ''
            this.email = ''
          } else {
            // 顯示錯誤
            // alert('data.message')
            this.$swal.fire({
              icon: 'error',
              text: data.message
            })
          }
        })
        .catch(error => {
          // 如果回來的狀態不是200，顯示回來的message
          // alert(error.response.data.message)
          this.$swal.fire({
            icon: 'error',
            text: error.response.data.message
          })
          this.accountReg = ''
          this.passwordReg = ''
          this.againpw = ''
          this.email = ''
        })
    },
    submitSignin (event) {
      event.preventDefault()
      if (this.accountSignin.length < 4 || this.accountSignin.length > 20) {
        this.$swal.fire({
          icon: 'error',
          text: '帳號格式不符'
        })
      } else if (this.passwordSignin.length < 4 || this.passwordSignin.length > 20) {
        this.$swal.fire({
          icon: 'error',
          text: '密碼格式不符'
        })
      }
      this.axios.post(process.env.VUE_APP_APIURL + '/login', { account: this.accountSignin, password: this.passwordSignin })
        .then(response => {
          const data = response.data
          // console.log(data)
          if (data.success) {
            this.$swal.fire({
              icon: 'success',
              text: '登入成功'
            })
            // 呼叫vuex 的登入
            // 把this.accountSignin 存進 vuex 裡面
            this.$store.commit('login', this.accountSignin)
            // 把data.result[0].email 存進 vuex 裡面，這樣會員資料就會出現了
            // this.$store.commit('emailin', data.result[0].email)
            this.$store.commit('memberId', data.result[0]._id)
            this.$store.commit('memberName', data.result[0].name)
            this.$store.commit('memberEmail', data.result[0].email)
            this.$store.commit('memberAddress', data.result[0].address)
            this.$store.commit('memberCellphone', data.result[0].cellphone)

            this.accountSignin = ''
            this.passwordSignin = ''
            if (data.result[0].account === 'admintty') {
              this.$router.push('/manager')
            } else {
              // 跳到登入後的周邊商品的頁面
              this.$router.push('/products')
            }
          } else {
            this.$swal.fire({
              icon: 'error',
              text: data.message
            })
          }
        })
        .catch(error => {
          this.$swal.fire({
            icon: 'error',
            text: error.response.data.message
          })
        })
    }

  }
}
</script>

<style lang="scss" scoped>
$blue:#395284;
$blue2:#293f64;
$yellow:#ffc554;
$pink:#e64b84;
$grey:#edeae3;
$white:white;
$transition:all 800ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
// $pt: 'PT Serif', serif;

flex-box {
  display: flex;
  align-items: center;
  justify-content: center;
}

#reg{
    @extend flex-box;
    height:100%;
    background-color: $blue;
    padding-top:5vh;
    overflow-x: hidden;

    .container{
      max-width: 50% !important;
      margin: auto;
      min-height: 74.1vh !important;
    }

    .www{
      display: flex;

    }
    .base{
      // background-color:$white;
      border-radius:5px;
      width:100%;
      height:70vh;
      margin: 0;
      position:relative;
      // overflow:hidden;
      z-index:0;
      -webkit-box-shadow: 0 10px 6px -6px darken($blue, 10%);
      -moz-box-shadow: 0 10px 6px -6px darken($blue, 10%);
      box-shadow: 0 10px 6px -6px darken($blue, 10%);
      .ccc{
        font-size:20px;
        // background: #293f64;
        // outline: none;
        // outline-width: 0px;
      }
      .btn:not(.ccc){
        // margin-top: 5rem;
        font-size:25px;
        &:focus {
            outline: none !important;
            box-shadow: none;
        }
      }
      h2{
        font-size:50px;
        text-align: center;
      }
      p{
        font-size:20px;
        margin-top:1vh;
        margin-bottom:3vh;
        text-align: center;
      }
      .aim{
        padding:2%;
        background-color:$yellow;
        height:100%;
        width:50%;
        position:absolute;
        top:0;
        left:0;
        z-index:2;
        transition:$transition;
        display:flex;
        flex-direction:column;
        justify-content: center;
        h2{
          color:$white;
        }
        .btn{
          border:1px solid $white;
          background-color:$yellow;
          color:$white;
        }
        &.in{
          left:50%;
          transition:$transition;
        }
      }
      .formArea{
        // padding:3%;
        background-color:$white;
        height:100%;
        // width:60%;
        position:absolute;
        top:0%;
        left:50%;
        transition:$transition;
        z-index:1;
        display:flex;
        flex-direction:column;
        justify-content: center;
        // align-items:;
        .btn{
          background-color:$blue;
          color:$white;
          &:focus {
            outline: none !important;
            box-shadow: none;
          }
        }
        input{
          font-size:20px;
          // font-family:$pt;
          background-color:$white;
          // color:$blue;
          // border:none;
          // border-radius:0;
          // border-bottom:1px solid $blue;
          &:focus {
            outline: none;
            box-shadow: none;
          }
          &::placeholder{
            color: $blue;
            font-size: 14px;
            // line-height: 14px;
          }
        }
        h2,h6{color:$blue;}
        &.in{
          transition:$transition;
          left:0%;
        }
      }
    }
}
</style>
