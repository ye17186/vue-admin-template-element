import store from '../../store'
import StoreUtils from './StoreUtils'

export default {
  /**
   * 新开页面Tab，已打开过，则不再重复打开
   * @param to 页面路由对象
   */
  addPageTab: function (to) {
    let tabs = store.state.pageTabs
    if (to.name !== 'Login' && to.name !== 'Page404' && to.name !== 'Lock') {
      // 设置当前激活页面
      StoreUtils.setActivePage(to)

      // 设置页面tab
      let index = -1
      let replace = false
      for (let i = 0; i < tabs.length; i++) {
        if (to.name === tabs[i].name) {
          index = i
          if (to.path !== tabs[i].path) {
            replace = true
          }
          break
        }
      }

      if (index === -1) {
        tabs.push(to)
      } else if (replace) { // 路径发生了变化，则替换原tab
        tabs.splice(index, 1, to)
      }
      StoreUtils.setPageTabs(tabs)

      // 设置页面打开顺序链
      let pageTabLink = store.state.pageTabLink
      let linkIndex = -1
      for (let i = 0; i < pageTabLink.length; i++) {
        if (to.name === pageTabLink[i].name) {
          linkIndex = i
          break
        }
      }
      if (linkIndex > -1) {
        pageTabLink.splice(linkIndex, 1)
      }
      pageTabLink.push(to)
      StoreUtils.setPageTabLink(pageTabLink)
    }
  },
  /**
   * 删除页面tab，同时打开上一个页面
   * @param tabName 页面tab名
   * @return 返回上一个打开的页面
   */
  removePageTab: function (tabName) {
    // 更新页面Tab
    let tabs = store.state.pageTabs
    let tabIndex = -1
    for (let i = 0; i < tabs.length; i++) {
      if (tabName === tabs[i].name) {
        tabIndex = i
        break
      }
    }
    if (tabIndex > -1) {
      tabs.splice(tabIndex, 1)
    }
    StoreUtils.setPageTabs(tabs)

    // 更新页面Tab展开顺序
    let pageTabLink = store.state.pageTabLink
    let linkIndex = -1
    for (let i = 0; i < pageTabLink.length; i++) {
      if (tabName === pageTabLink[i].name) {
        linkIndex = i
      }
    }
    if (linkIndex > -1) {
      pageTabLink.splice(linkIndex, 1)
    }
    StoreUtils.setPageTabLink(pageTabLink)

    // 返回上一个页面tab
    return pageTabLink[pageTabLink.length - 1]
  },
  /**
   * 删除页面所有tab，同时打开主页
   */
  removeAllPageTab: function () {
    StoreUtils.resetPageTab()
  },
  /**
   * 根据页面Key，获取tabs中的页面对象（路由对象）
   * @param pageKey 页面key（路由name）
   * @return {*}
   */
  getRouteByPageKey: function (pageKey) {
    const tabs = store.state.pageTabs
    let to
    for (let i = 0; i < tabs.length; i++) {
      if (pageKey === tabs[i].name) {
        to = tabs[i]
        break
      }
    }
    return to
  }
}
