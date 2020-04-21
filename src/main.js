import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './plugins/axios-config'
import config from '../public/config/config'

import NProgress from 'nprogress'
import './assets/iconfont/iconfont.css'
import 'nprogress/nprogress.css'

import './assets/css/common.scss'
import CacheUtils from './plugins/utils/CacheUtils'
import RouteUtils from './plugins/utils/RouteUtils'
import PageUtils from './plugins/utils/PageUtils'

Vue.prototype.$CONFIG = config
Vue.config.productionTip = false
NProgress.configure({ showSpinner: false })

// 页面刷新后，动态路由、vuex等会丢失，这里重新加载
const userInfo = CacheUtils.getObject(CacheUtils.key.USER_INFO)
if (userInfo !== null) {
  const userRoutes = RouteUtils.getUserRouters(userInfo.authCodes)
  RouteUtils.addRoutes(userRoutes)
}

router.beforeEach((to, from, next) => {
  // 动态修改标题
  if (to.meta.title) {
    document.title = to.meta.title + ' - ' + config.title
  }
  // 当前用户缓存
  const currentUser = CacheUtils.getObject(CacheUtils.key.USER_INFO)
  // 已登录时，默认路由为首页，否则为登录页
  if (to.path === '/') {
    const toPage = (currentUser === null) ? 'Login' : 'Home'
    next({ name: toPage })
  } else {
    if (to.name !== 'Login' && from.name !== 'Login') {
      NProgress.start()
    }
    // 已登录过，再进入登录页时，直接跳转到首页
    if (to.name === 'Login' && currentUser !== null) {
      next({ name: 'Home' })
    } else {
      next()
    }
  }
})

router.afterEach(to => {
  PageUtils.addPageTab(to)
  NProgress.done()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
