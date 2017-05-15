import axios from '@/components/axios/'
import * as types from './mutationTypes'

/** 获取文章信息 */
export const getArticle = ({ rootState, commit }) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: 'share/news_details',
      params: {
        news_id: rootState.route.params.id
      }
    })
    .then((response) => {
      commit(types.ARTICLE, response.data.data)
      resolve(response)
    })
    .catch((error) => {
      reject(error)
    })
  })
}

/** 获取保险 */
export const getInsurance = ({rootState, commit, state}) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: 'insurance/insurance_list',
      params: {
        area_code: rootState.route.params.area,
        page: state.insurance.page,
        page_size: state.insurance.page_size
      }
    })
    .then((response) => {
      commit(types.INSURANCE, response.data.data)
      resolve(response)
    })
    .catch((error) => {
      reject(error)
    })
  })
}

/** 设置保险页面高度 */
export const setInsuranceScroll = ({commit}, height) => {
  commit(types.INSURANCE_SCROLL, height)
}

/** 设置贷款页面高度 */
export const setCreditScroll = ({commit}, height) => {
  commit(types.CREDIT_SCROLL, height)
}

/** 获取贷款 */
export const getCredit = ({rootState, commit, state}) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: 'loan/loan_list',
      params: {
        area_code: rootState.route.params.area,
        page: state.credit.page,
        page_size: state.credit.page_size
      }
    })
    .then((response) => {
      commit(types.CREDIT, response.data.data)
      resolve(response)
    })
    .catch((error) => {
      reject(error)
    })
  })
}

/** 获取咨询单位 */
export const getContacts = ({ rootState, commit }, params) => {
  let type = (rootState.route.name.indexOf('insurance') !== -1 ? '1' : '2')
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: 'contacts/contacts_list',
      params: {
        contacts_type: type,
        loan_insurance_id: params.id
      }
    })
    .then((response) => {
      commit(types.CONTACTS, response.data.data)
      resolve(response)
    })
    .catch((error) => {
      reject(error)
    })
  })
}

/** 清空文章信息 */
export const clearArticle = ({ commit }) => {
  commit(types.ARTICLE, [])
}
