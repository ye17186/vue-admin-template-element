import store from '../../store'

const resetAll = function () {
  store.commit('resetAll')
}

const resetPageTab = function () {
  store.commit('resetPageTab')
}

const setCollapse = function (collapse) {
  store.commit('setCollapse', collapse)
}

const setActivePage = function (activePage) {
  store.commit('setActivePage', activePage)
}

const setPageTabs = function (tabs) {
  store.commit('setPageTabs', tabs)
}

const setPageTabLink = function (tabs) {
  store.commit('setPageTabLink', tabs)
}

export default {
  resetAll,
  resetPageTab,
  setActivePage,
  setPageTabs,
  setPageTabLink,
  setCollapse
}
