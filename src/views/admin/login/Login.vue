<template>
  <div class="yc-login-container">
    <el-card class="yc-login-card">
      <div slot="header">
        {{ $CONFIG.web.title }}Admin系统
        <el-dropdown class="yc-lang-box" size="mini" @command="selectLang">
          <span>
            {{ $t('lang') }}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="zh-CN">中文</el-dropdown-item>
            <el-dropdown-item command="en">English</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
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
              <img class="yc-imgCode-img" :src="imgCodeSrc" alt=""/>
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
import StoreUtils from '../../../plugins/utils/StoreUtils'

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
  computed: {
    lang: function () {
      return this.$store.state.lang
    }
  },
  mounted: function () {
    let lang = localStorage.getItem('lang')
    if (!lang) {
      lang = 'zh-CN'
    }
    this.selectLang(lang)
  },
  methods: {
    /**
     * 修改语言
     */
    selectLang: function (lang) {
      this.$i18n.locale = lang
      StoreUtils.setLang(lang)
      localStorage.setItem('lang', lang)
    },
    /**
     * 刷新图片验证码
     */
    refreshImgCode: function () {
      this.imgCodeSrc = (this.imgCodeIndex++ % 2 === 0)
        ? 'http://47.92.254.223/dfs/image/201904/1909817075800001.png'
        : 'http://47.92.254.223/dfs/image/201904/1909817075800002.png'
    },
    /**
     * 用户登录
     */
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

      .yc-lang-box {
        position: absolute;
        right: 10px;
        cursor: pointer;
      }

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
