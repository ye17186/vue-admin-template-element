import axios from 'axios'

export default {
  /**
   * GET请求
   *
   * @param url 请求地址
   * @param params 请求参数
   * @returns {Promise<>}
   */
  get: function (url, params) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'GET',
        url: url,
        params: params
      }).then(res => {
        if (res.hasOwnProperty('code') && res.code === 0) {
          resolve(res.data)
        } else {
          reject(res)
        }
      })
    })
  },
  /**
   * POST请求
   * @param url 请求地址
   * @param params 请求参数
   * @returns {Promise<>}
   */
  post: function (url, params) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'POST',
        url: url,
        data: params
      }).then(res => {
        if (res.hasOwnProperty('code') && res.code === 0) {
          resolve(res.data)
        } else {
          reject(res)
        }
      })
    })
  }
}
