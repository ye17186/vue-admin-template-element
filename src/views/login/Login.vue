<template>
  <div class="i-login-container">
    <el-card class="i-login-card animated bounceInDown">
      <div slot="header">
        {{ $CONFIG.web.title }}管理平台<i-lang-switcher class="i-lang-box"></i-lang-switcher>
      </div>
      <el-alert v-if="errMsg !== ''" type="error" style="margin-bottom: 20px;"
                :title="errMsg" @close="handleErrorClose">
      </el-alert>
      <el-form label-width="80px" ref="LoginForm" :model="Request.LoginRequest">
        <el-form-item :label="$t('login.mobile')" prop="mobile"
                      verify phone :empty-message="$t('login.mobileEmpty')">
          <el-input v-model="Request.LoginRequest.mobile" clearable>
            <i class="iconfont i-icon-user" slot="prepend"></i>
          </el-input>
        </el-form-item>
        <el-form-item :label="$t('login.password')" prop="password"
                      verify :empty-message="$t('login.passwordEmpty')">
          <el-input type="password" show-password
                    v-model="Request.LoginRequest.password" >
            <i class="iconfont i-icon-key" slot="prepend"></i>
          </el-input>
        </el-form-item>
        <el-form-item :label="$t('login.code')" prop="imgCode"
                      :verify="validImgCode" :empty-message="$t('login.codeEmpty')">
          <i-img-code-input ref="imgCodeInput" v-model="Request.LoginRequest.imgCode"
                             :code-length="4" @image-change="handleImageChange"></i-img-code-input>
        </el-form-item>
        <el-form-item>
          <el-button style="width: 100%;" type="primary" :loading="Loading.LoginBtn"
                     @click="doLogin">{{ $t('login.loginBtn') }}</el-button>
        </el-form-item>
      </el-form>
      <div class="i-footer-container">
        <span><i class="iconfont i-icon-copyright"></i>V{{ $CONFIG.web.version}} Designed By
          <el-link type="primary" :href="'mailto://' + $CONFIG.web.email">{{ $CONFIG.web.author }}</el-link>
        </span>
        </div>
    </el-card>
  </div>
</template>

<script>
import IImgCodeInput from '../../components/input/IImgCodeInput'
import ILangSwitcher from '../../components/layout/ILangSwitcher'
import RouteUtils from '../../plugins/utils/RouteUtils'
import CacheUtils from '../../plugins/utils/CacheUtils'
import FormUtils from '../../plugins/utils/FormUtils'
import HttpUtils from '../../plugins/utils/HttpUtils'
import MenuUtils from '../../plugins/utils/MenuUtils'

export default {
  name: 'Login',
  components: { ILangSwitcher, IImgCodeInput },
  data: function () {
    return {
      errMsg: '',
      Loading: {
        LoginBtn: false
      },
      imgCode: '', // 图形验证码的答案
      Request: {
        LoginRequest: {
          mobile: '13200000001',
          password: '123456',
          imgCode: ''
        }
      }
    }
  },
  mounted: function () {
    let lang = localStorage.getItem('lang')
    if (!lang) {
      lang = 'zh-CN'
    }
    this.$store.commit('setLang', lang)
  },
  methods: {
    /**
     * 修改语言
     */
    selectLang: function (lang) {
      this.$i18n.locale = lang
      this.$store.commit('setLang', lang)
    },
    handleErrorClose: function () {
      this.errMsg = ''
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
        HttpUtils.post(this.$API.user.login, this.Request.LoginRequest).then((res) => {
          // 缓存用户信息
          CacheUtils.setObject(CacheUtils.key.USER_INFO, res)
          // 构建用户路由表
          RouteUtils.loadUserRouters(res.authCodes)
          // 登录成功，跳转至首页
          RouteUtils.goto(MenuUtils.getIndexTab())
        }).catch(err => {
          this.errMsg = err.msg
        }).finally(() => {
          this.Loading.LoginBtn = false
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
  .i-login-container {
    height: 100%;
    min-height: 540px;
    width: 100%;
    background: url('../../assets/image/bg/login-cloud.jpg') 0 bottom repeat-x #049ec4;
    animation: animate-cloud 20s linear infinite;
    .i-login-card {
      top: 80px;
      position: relative;
      width: 380px;
      height: 380px;
      margin: 0 auto;
      .i-lang-box {
        position: absolute;
        right: 10px;
        cursor: pointer;
      }

      .i-errMsg-container {
        line-height: 1;
        text-align: right;
        color: #ff0000;
        height: 18px;
      }

      .i-imgCode-container {
        height: 40px;
        width: 100px;
        cursor: pointer;
      }

      .i-footer-container {
        text-align: center;
      }
    }
  }
</style>
<style lang="scss">
  .i-login-card .el-input-group__append, .el-input-group__prepend {
    padding: 0 10px !important;
  }
</style>
