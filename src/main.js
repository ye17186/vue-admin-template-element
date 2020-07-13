import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import './plugins'
import i18n from './assets/i18n/i18n'
import config from './config/config.site'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import './assets/css/common.scss'
import CacheUtils from './plugins/utils/CacheUtils'
import RouteUtils from './plugins/utils/RouteUtils'

Vue.config.productionTip = false
NProgress.configure({ showSpinner: false })

if (process.env.VUE_APP_ENV === 'dev' || process.env.VUE_APP_ENV === 'preview') {
  require('./mock')
}
const reload = function () {
  const userInfo = CacheUtils.getObject(CacheUtils.key.USER_INFO)
  if (userInfo !== null) {
    RouteUtils.loadUserRouters(userInfo.authCodes)
  }
}

const calcTitle = function (to) {
  if (to.meta.titles) {
    const arr = [...to.meta.titles.reverse()]
    arr.push(config.web.title)
    return arr.join(' - ')
  }
}

// 页面刷新后，动态路由、vuex等会丢失，这里重新加载
reload()

// 页面路由前处理
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (to.path === '/login' || to.path === '/register' || to.path === '/lock') {
    next()
  } else if (RouteUtils.isLocked()) {
    next({ path: '/lock' })
  } else {
    const userInfo = CacheUtils.getObject(CacheUtils.key.USER_INFO)
    userInfo !== null ? next() : next({ path: '/login' })
  }
})

// 页面路由后处理
router.afterEach(to => {
  // 动态修改标题
  if (to.meta.titles) {
    document.title = calcTitle(to)
  }
  if (!RouteUtils.isStatic(to)) {
    const tab = {
      path: to.path,
      params: to.params,
      query: to.query,
      meta: to.meta
    }
    store.dispatch('setActiveKey', tab.meta.key)
    store.commit('addOpenedTabs', tab)
  }
  NProgress.done()
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
