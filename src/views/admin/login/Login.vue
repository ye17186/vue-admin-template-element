<template>
  <div class="yc-login-container">
    <el-card class="yc-login-card" :header="$CONFIG.web.title + ' Admin系统'">
<!--      <el-button @click="languageChange">language</el-button>-->
      <div class="yc-errMsg-container">
        <span v-if="errMsg !== ''">*{{ errMsg }}
          <el-link :href="'mailto://' + $CONFIG.web.email">联系作者索取账号</el-link>
        </span>
      </div>
      <el-form label-width="80px" ref="LoginForm" :model="Request.LoginRequest">
        <el-form-item :label="$t('login.mobile')" prop="mobile"
                      verify phone :empty-message="$t('login.mobileEmpty')">
          <el-input v-model="Request.LoginRequest.mobile" auto-complete="off" clearable>
            <i class="el-icon-exp-account" slot="prepend"></i>
          </el-input>
        </el-form-item>
        <el-form-item :label="$t('login.password')" prop="password"
                      verify :length = "6" :empty-message="$t('login.passwordEmpty')">
          <el-input type="password" v-model="Request.LoginRequest.password" auto-complete="off" clearable>
            <i class="el-icon-exp-password" slot="prepend"></i>
          </el-input>
        </el-form-item>
        <el-form-item :label="$t('login.code')" prop="imgCode"
                      verify :length = "4" :empty-message="$t('login.codeEmpty')">
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
                     @click="doLogin">{{ $t('login.loginBtn') }}</el-button>
        </el-form-item>
      </el-form>
      <div class="yc-footer-container">
        <span>@V{{ $CONFIG.web.version}} Designed By
          <el-link :href="'mailto://' + $CONFIG.web.email">{{ $CONFIG.web.author }}</el-link>
        </span>
        </div>
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
      },
      allowedMobile: ['13277033197', '13277033196']
    }
  },
  methods: {
    languageChange: function () {
      let lang = this.$i18n.locale
      this.$i18n.locale = lang === 'cn' ? 'en' : 'cn'
    },
    refreshImgCode: function () {
      this.imgCodeSrc = (this.imgCodeIndex++ % 2 === 0)
        ? 'http://47.92.254.223/dfs/image/201904/1909817075800001.png'
        : 'http://47.92.254.223/dfs/image/201904/1909817075800002.png'
    },
    doLogin: function () {
      FormUtils.validForm(this.$refs['LoginForm'], () => {
        this.Loading.LoginBtn = true
        HttpUtils.post(this.$API.login, this.Request.LoginRequest).then((res) => {
          console.log(res)
        }).catch(err => {
          console.log(err)
        }).finally(() => {
          this.Loading.LoginBtn = false
          if (!this.allowedMobile.includes(this.Request.LoginRequest.mobile)) {
            this.errMsg = '用户不存在'
            return
          }
          const userInfo = {
            userId: 100,
            username: 'it-follower',
            authCodes: ['A']
          }
          if (this.Request.LoginRequest.mobile !== '13277033196') {
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
      }
    }
  }
</style>
<style lang="scss">
  .yc-login-card .el-input-group__append, .el-input-group__prepend {
    padding: 0 10px !important;
  }
</style>
