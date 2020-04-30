<template>
  <div class="yc-login-container">
    <el-card class="yc-login-card animated bounceInDown">
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
          <el-input v-model="Request.LoginRequest.mobile" clearable>
            <i class="el-icon-exp-account" slot="prepend"></i>
          </el-input>
        </el-form-item>
        <el-form-item :label="$t('login.password')" prop="password"
                      verify :empty-message="$t('login.passwordEmpty')">
          <el-input type="password" show-password
                    v-model="Request.LoginRequest.password" >
            <i class="el-icon-exp-password" slot="prepend"></i>
          </el-input>
        </el-form-item>
        <el-form-item :label="$t('login.code')" prop="imgCode"
                      :verify="validImgCode" :empty-message="$t('login.codeEmpty')">
          <yc-img-code-input ref="imgCodeInput" v-model="Request.LoginRequest.imgCode"
                             :code-length="4" @image-change="handleImageChange"></yc-img-code-input>
        </el-form-item>
        <el-form-item>
          <el-button style="width: 100%;" type="primary" native-type="submit" :loading="Loading.LoginBtn"
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
import YcImgCodeInput from '../../../components/input/YcImgCodeInput'

export default {
  name: 'Login',
  components: { YcImgCodeInput },
  data: function () {
    return {
      errMsg: '',
      Loading: {
        LoginBtn: false
      },
      imgCode: '', // 图形验证码的答案
      Request: {
        LoginRequest: {
          mobile: '13277033197',
          password: '123456',
          imgCode: ''
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
    handleImageChange: function (value) {
      this.imgCode = value
      this.Request.LoginRequest.imgCode = value
    },
    validImgCode: function (rule, val, callback) {
      if (val.toLowerCase() !== this.imgCode.toLowerCase()) {
        callback(Error(this.$t('login.codeInvalid')))
      } else {
        callback()
      }
    },
    /**
     * 用户登录
     */
    doLogin: function () {
      if (this.Request.LoginRequest.imgCode.toLowerCase() !== this.imgCode.toLowerCase()) {
        this.Request.LoginRequest.imgCode = ''
        this.$refs.imgCodeInput.refresh() // 刷新图形验证码
        return
      }
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
  @-webkit-keyframes animate-cloud {
    from {
      background-position: 600px 100%;
    }
    to {
      background-position: 0 100%;
    }
  }

  @-moz-keyframes animate-cloud {
    from {
      background-position: 600px 100%;
    }
    to {
      background-position: 0 100%;
    }
  }

  @-ms-keyframes animate-cloud {
    from {
      background-position: 600px 100%;
    }
    to {
      background-position: 0 100%;
    }
  }

  @-o-keyframes animate-cloud {
    from {
      background-position: 600px 100%;
    }
    to {
      background-position: 0 100%;
    }
  }
  .yc-login-container {
    height: 100%;
    min-height: 540px;
    width: 100%;
    background: url('../../../assets/image/bg/login-cloud.jpg') 0 bottom repeat-x #049ec4;
    animation: animate-cloud 20s linear infinite;
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
