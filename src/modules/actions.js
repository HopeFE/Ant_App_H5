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

/** 清空文章信息 */
export const clearArticle = ({ commit }) => {
  commit(types.ARTICLE, [])
}
