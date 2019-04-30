/**
 * 保存对象缓存
 * @param key 主键
 * @param value 值
 */
const setObject = function (key, value) {
  sessionStorage.setItem(key, JSON.stringify(value))
}

/**
 * 获取对象缓存
 * @param key 主键
 * @return {*}
 */
const getObject = function (key) {
  let value = sessionStorage.getItem(key)
  if (value !== null) {
    return JSON.parse(value)
  } else {
    return null
  }
}

/**
 * 清楚所有缓存
 */
const clearAll = function () {
  sessionStorage.clear()
}

export default {
  key: {
    'USER_INFO': 'USER_INFO',
    'USER_ROUTES': 'USER_ROUTES'
  },
  setObject,
  getObject,
  clearAll
}
