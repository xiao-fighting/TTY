<template lang="pug">
  #app(:style="{backgroundImage:`url('./images/bg.jpg')`}")
    b-navbar(toggleable='lg' :style="style")
      b-navbar-brand(to="/").mx-3
        b-img(src="../public/images/logo.png" class="logo ml-lg-4")
      b-navbar-toggle(target='nav-collapse' :style="whcolor")
      b-collapse#nav-collapse(is-nav)
        b-navbar-nav.ml-auto
          b-nav-item(to="/about") 關於小戴
          b-nav-item(to='/raceInformations') 賽事資訊
          b-nav-item(to='/products/vt') 周邊商品
          b-nav-item(to='/questions') 購物須知
          b-nav-item(to='/member/memberInf') 會員專區
        b-navbar-nav.ml-auto.mx-5
          b-nav-item(to='/search').ml-2
            font-awesome-icon(:icon="['fas', 'search']" class="aaa")
          b-nav-item(v-if="user.length ===0" to='/reg').ml-2 註冊/登入
            //- font-awesome-icon(:icon="['fas', 'user-circle']" class="aaa")
          b-nav-item(v-else @click="logout").ml-2 登出
          b-nav-item(to='/shoppingCart' ).ml-2
            img(src="../public/images/cartWhite.png" class="cart01")
    keep-alive
      router-view
    footer(class="ttyfooter")
      font-awesome-icon(:icon="['far','copyright']" class="text-white")
      span 圖片來源: victor、ilovetty
</template>
<script>
export default {
  data () {
    return {
      style: {
        backgroundColor: '#0b2637 '
      },
      whcolor: {
        backgroundColor: 'rgb(255,255,255)'

      }
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    }
  },
  methods: {
    logout () {
      this.axios.delete(process.env.VUE_APP_APIURL + '/logout')
        .then(response => {
          // console.log(response)
          const data = response.data
          // console.log(data)
          if (data.success) {
            this.$swal.fire({
              icon: 'success',
              text: '登出成功'
            })
            this.$store.commit('logout')
            // vue 若在要導向的頁面登出，會出現紅字
            // 如果現在不是在首頁，登出後就跳到首頁
            if (this.$route.path !== '/') {
              this.$router.push('/')
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
    // heartbeat () {
    //   this.axios.get(process.env.VUE_APP_APIURL + '/heartbeat')
    //     .then(response => {
    //       // console.log(response)
    //       const data = response.data
    //       //  console.log(data) ======>false??
    //       // console.log(data)
    //       // 如果是登入中
    //       if (this.user.length > 0) {
    //         // 如果後端登入時間過期
    //         if (!data) {
    //           alert('登入時效已過')
    //           // 前端登出
    //           this.$store.commit('logout')
    //           // 如果現在不是在首頁，跳到登出後的首頁
    //           if (this.$route.path !== '/') {
    //             this.$router.push('/')
    //           }
    //         }
    //       }
    //     })
    //     .catch(() => {
    //       alert('發生錯誤')
    //       this.$store.commit('logout')
    //       // 如果現在不是在首頁，跳到登出後的首頁
    //       if (this.$route.path !== '/') {
    //         this.$router.push('/')
    //       }
    //     })
    // }
  },
  // 當app.vue掛載到網頁上時
  mounted () {
    // this.heartbeat()
    // setInterval(() => {
    //   this.heartbeat()
    // }, 1000 * 5)
  }
}
</script>
