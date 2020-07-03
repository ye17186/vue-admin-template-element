const login = function (res) {
  const allowed = ['13200000001', '13200000002']
  if (!allowed.includes(res.mobile)) {
    return {
      code: 1,
      msg: '用户不存在',
      data: res.mobile
    }
  } else if (res.password !== '123456') {
    return {
      code: 2,
      msg: '密码不正确',
      data: res.mobile
    }
  } else {
    return {
      code: 0,
      msg: 'SUCCESS',
      data: {
        userId: res.mobile === '13200000001' ? 1 : 2,
        username: res.mobile,
        mobile: res.mobile,
        authCodes: res.mobile === '13200000001' ? ['ALL'] : ['M001']
      }
    }
  }
}
export default {
  login
}
