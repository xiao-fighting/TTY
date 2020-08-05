import Vue from 'vue'
import Vuex from 'vuex'

// vuex-persistedstate 將狀態存在 localStorage 或 cookie
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  // 狀態
  state: {
    user: '',
    id: '',
    account: '',
    email: '',
    name: '',
    address: '',
    cellphone: '',
    cart: []

  },
  // 修改狀態的 function
  mutations: {
    login (state, data) {
      // 登入 把user 換成state裡的 user
      state.user = data
    },
    // emailin (state, data) {
    //   state.email = data
    // },
    logout (state) {
      // 把user 給清空
      state.user = ''
      state.id = ''
      state.email = ''
      state.name = ''
      state.address = ''
      state.cellphone = ''
    },
    memberId (state, data) {
      state.id = data
    },
    memberName (state, data) {
      state.name = data
    },
    memberEmail (state, data) {
      state.email = data
    },
    memberAddress (state, data) {
      state.address = data
    },
    memberCellphone (state, data) {
      state.cellphone = data
    },
    addCart (state, data) {
      // console.log(data)
      state.cart.push(data)
    },
    delCart (state, index) {
      state.cart.splice(index, 1)
    }
  },
  // 獲取資料的 function
  getters: {
    user (state) {
      return state.user
    },
    account (state) {
      return state.account
    },
    id (state) {
      return state.id
    },
    email (state) {
      return state.email
    },
    name (state) {
      return state.name
    },
    address (state) {
      return state.address
    },
    cellphone (state) {
      return state.cellphone
    },
    cart (state) {
      return state.cart
    }

  },
  // 修改狀態的 function，支援 async
  actions: {
  },
  // 將 Vuex 模組化分割
  modules: {
  },
  plugins: [createPersistedState()]

})
