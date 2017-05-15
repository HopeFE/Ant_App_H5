import * as actions from './actions'
import * as types from './mutationTypes'

const state = {
  system: (/iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()) ? 'IOS' : 'Android'),
  isWeixin: (/MicroMessenger/ig).test(navigator.userAgent),
  article: {},
  contacts: {},
  credit: {
    list: {
      data: [],
      totalPage: '',
      totalRow: ''
    },
    scroll: 0,
    page_size: 10,
    page: 1
  },
  insurance: {
    list: {
      data: [],
      totalPage: '',
      totalRow: ''
    },
    scroll: 0,
    page_size: 10,
    page: 1
  }
}

const getters = {
  id: (state, getters, rootState) => {
    return rootState.route.params.id
  },
  route: (state, getters, rootState) => {
    return rootState.route
  },
  system: (state, getters, rootState) => {
    return rootState.ant.system
  },
  isWeixin: (state, getters, rootState) => {
    return rootState.ant.isWeixin
  },
  article: (state, getters, rootState) => {
    return rootState.ant.article
  },
  credit: (state, getters, rootState) => {
    return rootState.ant.credit
  },
  insurance: (state, getters, rootState) => {
    return rootState.ant.insurance
  },
  contacts: (state, getters, rootState) => {
    return rootState.ant.contacts
  }
}

const mutations = {
  [types.ARTICLE] (state, data) {
    state.article = data
  },
  [types.CREDIT] (state, data) {
    state.credit.list.data = data.list
    state.credit.list.totalPage = data.totalPage
    state.credit.list.totalRow = data.totalRow
  },
  [types.CREDIT_SCROLL] (state, data) {
    state.credit.scroll = data
  },
  [types.INSURANCE_SCROLL] (state, data) {
    state.insurance.scroll = data
  },
  [types.INSURANCE] (state, data) {
    state.insurance.list.data = data.list
    state.insurance.list.totalPage = data.totalPage
    state.insurance.list.totalRow = data.totalRow
  },
  [types.CONTACTS] (state, data) {
    state.contacts = data
  },
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
