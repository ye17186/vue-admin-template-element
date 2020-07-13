export default {
  mobile: function (rule, value, callback) {
    const isValid = /^1(3|4|5|6|7|8)\d{9}$/.test(value)
    if (isValid) {
      callback()
    } else {
      callback(new Error())
    }
  }
}
