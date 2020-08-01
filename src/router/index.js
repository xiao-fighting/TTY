import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'
import MemberInf from '../components/member/MemberInf.vue'
import OrderInf from '../components/member/OrderInf.vue'
import AllProducts from '../components/products/AllProducts.vue'
import FacialMask from '../components/products/FacialMask.vue'
import Clothes from '../components/products/Clothes.vue'
import Souvenir from '../components/products/Souvenir.vue'
import Vt from '../components/products/Vt.vue'
import Bags from '../components/products/Bags.vue'
import Limited from '../components/products/Limited.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      // 不需要登入
      login: false,
      title: '穎迷 | 首頁'
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      login: false,
      title: '穎迷 | 關於小戴'
    }
  },
  {
    path: '/raceInformations',
    name: 'RaceInformations',
    component: () => import(/* webpackChunkName: "raceInformation" */ '../views/RaceInformations.vue'),
    meta: {
      login: false,
      title: '穎迷 | 賽事資訊'
    }
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import(/* webpackChunkName: "products" */ '../views/Products.vue'),
    meta: {
      login: false,
      title: '穎迷 | 周邊商品'
    },
    children: [
      {
        path: 'allProducts',
        name: 'AllProducts',
        component: AllProducts,
        meta: {
          login: false,
          title: '穎迷 | 周邊商品-全部商品',
          route: 'Products'
        }
      },
      {
        path: 'facialMask',
        name: 'FacialMask',
        component: FacialMask,
        meta: {
          login: false,
          title: '穎迷 | 周邊商品-面膜',
          route: 'Products'
        }
      },
      {
        path: 'clothes',
        name: 'Clothes',
        component: Clothes,
        meta: {
          login: false,
          title: '穎迷 | 周邊商品-上衣',
          route: 'Products'
        }
      },
      {
        path: 'souvenir',
        name: 'Souvenir',
        component: Souvenir,
        meta: {
          login: false,
          title: '穎迷 | 周邊商品-飾品 / 紀念品',
          route: 'Products'
        }
      },
      {
        path: 'vt',
        name: 'Vt',
        component: Vt,
        meta: {
          login: false,
          title: '穎迷 | 周邊商品-Victory系列',
          route: 'Products'
        }
      },
      {
        path: 'bags',
        name: 'Bags',
        component: Bags,
        meta: {
          login: false,
          title: '穎迷 | 周邊商品-背包 / 帽子',
          route: 'Products'
        }
      },
      {
        path: 'limited',
        name: 'Limited',
        component: Limited,
        meta: {
          login: false,
          title: '穎迷 | 周邊商品-限量組合包',
          route: 'Products'
        }
      }
    ]
  },
  {
    path: '/questions',
    name: 'Questions',
    component: () => import(/* webpackChunkName: "questions" */ '../views/Questions.vue'),
    meta: {
      login: false,
      title: '穎迷 | 購物須知'
    }
  },
  {
    path: '/member',
    name: 'Member',
    component: () => import(/* webpackChunkName: "member" */ '../views/Member.vue'),
    meta: {
      login: true,
      title: '穎迷 | 會員專區'
    },
    children: [
      {
        path: 'memberInf',
        name: 'MemberInf',
        component: MemberInf,
        meta: {
          login: true,
          title: '穎迷 | 會員專區-會員資料',
          route: 'Member'
        }
      },
      {
        path: 'orderInf',
        name: 'OrderInf',
        component: OrderInf,
        meta: {
          login: true,
          title: '穎迷 | 會員專區-訂單資訊',
          route: 'Member'
        }
      }
    ]
  },
  {
    path: '/shoppingCart',
    name: 'ShoppingCart',
    component: () => import(/* webpackChunkName: "shoppingCart" */ '../views/ShoppingCart.vue'),
    meta: {
      login: true
    }
  },
  {
    path: '/reg',
    name: 'Reg',
    component: () => import(/* webpackChunkName: "reg" */ '../views/Reg.vue'),
    meta: {
      login: false,
      title: '穎迷 | 註冊/登入'
    }
  }
]

const router = new VueRouter({
  routes
})

// 進去網站，判斷是否要擋葉面
router.beforeEach((to, from, next) => {
  // login:true && store.state.user 沒有東西的話，丟去 login的頁面
  if (to.meta.login && !store.state.user) {
    next('/reg')
  } else {
    // 去該去的地方
    next()
  }
})

router.afterEach((to, from) => {
  document.title = (to.name !== 'ShoppingCart') ? to.meta.title : store.state.user + ' 的購物車'
})

export default router
