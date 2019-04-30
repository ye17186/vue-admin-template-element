import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const homePageTab = {
  name: 'Home',
  path: '/a/home',
  meta: {
    title: '首页',
    icon: 'el-icon-exp-home'
  }
}
export default new Vuex.Store({
  state: {
    hasAddRoutes: false,
    activePage: {},
    pageTabs: [homePageTab],
    pageTabLink: [homePageTab]
  },
  mutations: {
    resetAll: function (state) {
      state.hasAddRoutes = false
      state.activePage = {}
      state.pageTabs = [homePageTab]
      state.pageTabLink = [homePageTab]
    },
    setHasAddRoutes: function (state, value) {
      state.hasAddRoutes = value
    },
    setActivePage: function (state, value) {
      state.activePage = value
    },
    setPageTabs: function (state, value) {
      state.pageTabs = value
    },
    setPageTabLink: function (state, value) {
      state.pageTabLink = value
    }
  },
  actions: {
    resetAll: function (context) {
      context.commit('resetAll')
    },
    setHasAddRoutes: function (context, value) {
      context.commit('setHasAddRoutes', value)
    },
    setPageTabs: function (context, value) {
      context.commit('setPageTabs', value)
    },
    setActivePage: function (context, value) {
      context.commit('setActivePage', value)
    },
    setPageTabLink: function (context, value) {
      context.commit('setPageTabLink', value)
    }
  }
})
