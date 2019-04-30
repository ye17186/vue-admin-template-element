<template>
  <div class="yc-login-container">
    <el-card class="yc-login-card" header="IT小跟班 Admin系统">
      <div class="yc-errMsg-container">
        <span v-if="errMsg !== ''">*{{ errMsg }} <a href="mailto://ye17186@163.com">联系作者索取账号</a></span>
      </div>
      <el-form label-width="65px" ref="LoginForm" :model="Request.LoginRequest">
        <el-form-item label="手机号" prop="mobile" verify phone empty-message="手机号不能为空">
          <el-input v-model="Request.LoginRequest.mobile" auto-complete="off">
            <i class="el-icon-exp-account" slot="prepend"></i>
          </el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" verify :length = "6" empty-message="密码不能为空">
          <el-input type="password" v-model="Request.LoginRequest.password" auto-complete="off">
            <i class="el-icon-exp-password" slot="prepend"></i>
          </el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="imgCode" verify :length = "4" empty-message="验证码不能为空">
          <el-col :span="14">
            <el-input v-model="Request.LoginRequest.imgCode" placeholder="验证码" maxlength="4" clearable>
              <i class="el-icon-exp-ecurityCode" slot="prepend"></i>
            </el-input>
          </el-col>
          <el-col :span="1">&nbsp;</el-col>
          <el-col :span="9">
            <div class="yc-imgCode-container" @click="refreshImgCode" title="看不清？换一张">
              <img class="yc-imgCode-img" :src="imgCodeSrc" />
            </div>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button style="width: 100%;" type="primary" :loading="Loading.LoginBtn"
                     @click="doLogin">登录</el-button>
        </el-form-item>
      </el-form>
      <div class="yc-footer-container">@V1.3.0 Designed By <a href="mailto://ye17186@163.com">IT小跟班</a></div>
    </el-card>
  </div>
</template>

<script>
import RouteUtils from '../../../plugins/utils/RouteUtils'
import CacheUtils from '../../../plugins/utils/CacheUtils'
import FormUtils from '../../../plugins/utils/FormUtils'
import HttpUtils from '../../../plugins/utils/HttpUtils'

export default {
  name: 'Login',
  data: function () {
    return {
      errMsg: '',
      imgCodeIndex: 1,
      imgCodeSrc: 'http://47.92.254.223/dfs/image/201904/1909817075800001.png',
      Loading: {
        LoginBtn: false
      },
      Request: {
        LoginRequest: {
          mobile: '13277033197',
          password: '123456',
          imgCode: '1234'
        }
      }
    }
  },
  methods: {
    refreshImgCode: function () {
      this.imgCodeSrc = (this.imgCodeIndex++ % 2 === 0)
        ? 'http://47.92.254.223/dfs/image/201904/1909817075800001.png'
        : 'http://47.92.254.223/dfs/image/201904/1909817075800002.png'
    },
    doLogin: function () {
      const _this = this
      FormUtils.validForm(_this.$refs['LoginForm'], () => {
        _this.Loading.LoginBtn = true
        HttpUtils.post('/login', _this.Request.LoginRequest).then((res) => {
          console.log(res)
        }).catch(err => {
          console.log(err)
        }).finally(() => {
          const userInfo = {
            userId: 100,
            username: 'it-follower',
            authCodes: ['A']
          }
          if (_this.Request.LoginRequest.mobile !== '13277033196') {
            userInfo.authCodes = ['B']
          }
          // 缓存用户信息
          CacheUtils.setObject(CacheUtils.key.USER_INFO, userInfo)
          // 构建用户路由表
          const userRoutes = RouteUtils.getUserRouters(userInfo.authCodes)
          RouteUtils.addRoutes(userRoutes)
          // 缓存用户路由（用于构建左边菜单栏）
          CacheUtils.setObject(CacheUtils.key.USER_ROUTES, userRoutes)
          // 登录成功，跳转至首页
          RouteUtils.goto('Home')
          _this.Loading.LoginBtn = false
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .yc-login-container {
    height: 100%;
    min-height: 540px;
    width: 100%;
    background-image: url('../../../assets/image/login-bg.jpg');
    .yc-login-card {
      top: 80px;
      position: relative;
      width: 380px;
      height: 380px;
      margin: 0 auto;
      .yc-errMsg-container {
        line-height: 1;
        text-align: right;
        color: #ff0000;
        height: 18px;
      }
      .yc-imgCode-container {
        height: 40px;
        width: 100px;
        cursor: pointer;
        .yc-imgCode-img {
          margin-top: 1px;
          height: 100%;
          width: 100%;
          border-radius: 4px;
        }
      }
      .yc-footer-container {
        text-align: center;
        color: rgb(224, 224, 224);
        a {
          color: #000000;
        }
      }
    }
  }
</style>
<style lang="scss">
  .yc-login-card .el-input-group__append, .el-input-group__prepend {
    padding: 0 10px !important;
  }
</style>
