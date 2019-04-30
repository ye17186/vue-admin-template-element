import store from '../../store'

const resetAll = function () {
  store.commit('resetAll')
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
  setActivePage,
  setPageTabs,
  setPageTabLink
}
