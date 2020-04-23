import router from '../../router'
import store from '../../store'
import { getFullRouters } from '../../assets/config/full-router'

/**
 * 递归构建用户路由
 * @param authCodes 用户权限码
 * @param srcRouters 源路由
 * @return {*}
 */
const buildUserRouters = function (authCodes, srcRouters) {
  srcRouters = srcRouters.filter(router => {
    return !(router.meta && router.meta.authCode && authCodes.indexOf(router.meta.authCode) < 0)
  })
  // 递归处理子路由
  srcRouters.forEach(router => {
    if (router.children && router.children.length > 0) {
      router.children = buildUserRouters(authCodes, router.children)
    }
  })
  return srcRouters
}

export default {
  /**
   * 根据用户权限码，获取用户路由
   * @param authCodes 用户权限码数组
   * @return {{path, name, component, children}}
   */
  getUserRouters: function (authCodes) {
    let userRouters = getFullRouters()
    userRouters.children = buildUserRouters(authCodes, userRouters.children)
    return userRouters
  },
  addRoutes: function (userRoutes) {
    if (!store.state.hasAddRoutes) {
      store.commit('setHasAddRoutes', true)
      router.addRoutes([userRoutes])
      // 动态路由加载完之后，再加入404、lock等路由
      router.addRoutes([{
        path: '/lock',
        name: 'Lock',
        component: () => import('../../views/admin/lock/Lock')
      }, {
        path: '*',
        name: 'Page404',
        component: () => import('../../views/admin/error/Page404')
      }])
    }
  },
  goto: function (page) {
    const type = typeof page // 参数类型
    if (type === 'string') { // String类型，则当做name路由
      router.push({
        name: page
      })
    } else if (type === 'object') { // Object类型的路由方式
      let to = {}
      if (page.name) {
        to.name = page.name
      }
      if (page.path) {
        to.path = page.path
      }
      if (page.query) {
        to.query = page.query
      }
      if (page.params) {
        to.params = page.params
      }
      router.push(to)
    }
  }
}
