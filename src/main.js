import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import VueWow from 'vue-wow'
import VueSweetalert2 from 'vue-sweetalert2'

import animated from 'animate.css'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/scss/style.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faSearch, faUserCircle, faBars, faChevronLeft, faChevronRight, faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faCopyright, faPlayCircle } from '@fortawesome/free-regular-svg-icons'
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
import VueAgile from 'vue-agile'
import axios from 'axios'
import VueAxios from 'vue-axios'

// axios 預設傳送認證資訊
axios.defaults.withCredentials = true

library.add(faSearch, faUserCircle, faBars, faCopyright, faChevronLeft, faChevronRight, faPlayCircle, faCartArrowDown)
Vue.use(animated)
Vue.use(VueWow)
Vue.use(CoolLightBox)
Vue.use(VueAgile)
Vue.use(VueAxios, axios)
Vue.use(VueSweetalert2)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
