import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/admin/login/Login'

Vue.use(Router)

/**
 * 初始化路由
 * @return {VueRouter}
 */
const initRouter = function () {
  return new Router({
    routes: [
      {
        path: '/a/login',
        name: 'Login',
        component: Login,
        meta: {
          title: '登录'
        }
      }
    ]
  })
}

const router = initRouter()
/**
 * 重置路由
 */
export function resetRouter () {
  const newRouter = initRouter()
  router.matcher = newRouter.matcher
}

export default router
