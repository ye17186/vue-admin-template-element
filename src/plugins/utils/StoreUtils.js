import store from '../../store'

export default {
  /**
   * 重置vuex
   */
  resetAll: function () {
    store.commit('resetAll')
  },
  /**
   * 重置页面页签
   */
  resetPageTab: function () {
    store.commit('resetPageTab')
  },
  /**
   * 设置菜单折叠状态
   * @param collapse 是否折叠
   */
  setCollapse: function (collapse) {
    store.commit('setCollapse', collapse)
  },
  /**
   * 设置当前激活的页面
   * @param activePage 激活的页面对象
   */
  setActivePage: function (activePage) {
    store.commit('setActivePage', activePage)
  },
  /**
   * 设置页面的页签
   * @param tabs 页签数组
   */
  setPageTabs: function (tabs) {
    store.commit('setPageTabs', tabs)
  },
  /**
   * 设置页面页签的打开顺序
   * @param tabs 有序的页签数组
   */
  setPageTabLink: function (tabs) {
    store.commit('setPageTabLink', tabs)
  },
  /**
   * 设置语言
   * @param lang 语言（zh-CN，en）
   */
  setLang: function (lang) {
    store.commit('setLang', lang)
  }
}
