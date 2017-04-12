import * as actions from './actions'
import * as types from './mutationTypes'
const state = {
  system: (/iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()) ? 'IOS' : 'Android'),
  article: {},
  isWeixin: (/MicroMessenger/ig).test(navigator.userAgent)
}

const getters = {
  id: (state, getters, rootState) => {
    return rootState.route.params.id
  },
  system: (state, getters, rootState) => {
    return rootState.ant.system
  },
  isWeixin: (state, getters, rootState) => {
    return rootState.ant.isWeixin
  },
  article: (state, getters, rootState) => {
    return rootState.ant.article
  }
}

const mutations = {
  [types.ARTICLE] (state, data) {
    state.article = data
  }
}

export default {
  actions,
  state,
  mutations,
  getters
}
