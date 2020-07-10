<template>
  <div class="i-user-login">
    <el-form class="login-form" ref="loginForm" :rules="rules" :model="request">
      <i-lang-switcher class="i-lang-btn" style=""></i-lang-switcher>
      <el-tabs v-model="activeTab">
        <el-tab-pane label="邮箱登录" name="E">
          <template v-if="activeTab === 'E'">
            <el-alert v-if="errors.e" type="error" style="margin-bottom: 24px;">{{ errors.e }}</el-alert>
            <el-form-item prop="email">
              <el-input :placeholder="$t('login.tab1.emailPlaceholder')" v-model="request.email">
                <i-icon slot="prefix" class="el-input__icon" type="i-icon-mail"></i-icon>
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input type="password" :placeholder="$t('login.tab1.passwordPlaceholder')" v-model="request.password">
                <i-icon slot="prefix" class="el-input__icon" type="i-icon-key"></i-icon>
              </el-input>
            </el-form-item>
          </template>
        </el-tab-pane>
        <el-tab-pane label="手机号登录" name="M">
          <template v-if="activeTab === 'M'">
            <el-alert v-if="errors.m" type="error" style="margin-bottom: 24px;">{{ errors.m }}</el-alert>
            <el-form-item prop="mobile">
              <el-input :placeholder="$t('login.tab2.mobilePlaceholder')" v-model="request.mobile">
                <i-icon slot="prefix" class="el-input__icon" type="i-icon-mobile"></i-icon>
              </el-input>
            </el-form-item>
            <el-row :gutter="20">
              <el-col :span="14">
                <el-form-item prop="sms">
                  <el-input type="password" :placeholder="$t('login.tab2.smsPlaceholder')" v-model="request.sms">
                    <i-icon slot="prefix" class="el-input__icon" type="i-icon-key"></i-icon>
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="10">
                <el-form-item>
                  <el-button class="smsSendBtn" :disabled="smsSendBtn.disabled" @click="doSendSms">
                    {{ !smsSendBtn.disabled && '获取验证码' || smsSendBtn.time + 's' }}
                  </el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </template>
        </el-tab-pane>
      </el-tabs>
      <el-form-item>
        <el-button class="login-btn" type="primary" :loading="loading"
                   @click="doLogin">登录</el-button>
      </el-form-item>

      <div class="user-login-other">
        <span>其他登录方式</span>
        <a><i-icon class="item-icon" type="i-icon-alipay" :icon-size="24"></i-icon></a>
        <a><i-icon class="item-icon" type="i-icon-wechat-fill" :icon-size="24"></i-icon></a>
        <router-link class="user-register-link" :to="{ path: 'register' }">注册账户</router-link>
      </div>
    </el-form>
  </div>
</template>

<script>

import IIcon from '../../components/IIcon'
import HttpUtils from '../../plugins/utils/HttpUtils'
import CacheUtils from '../../plugins/utils/CacheUtils'
import RouteUtils from '../../plugins/utils/RouteUtils'
import MenuUtils from '../../plugins/utils/MenuUtils'
import FormUtils from '../../plugins/utils/FormUtils'
import ILangSwitcher from '../../components/layout/ILangSwitcher'
export default {
  name: 'Login',
  components: { ILangSwitcher, IIcon },
  data: function () {
    return {
      activeTab: 'E',
      smsCode: '',
      request: {
        mobile: '13200000001',
        sms: '',
        email: 'ye001@163.com',
        password: '123456'
      },
      loading: false,
      errors: {
        e: '',
        m: ''
      },
      smsSendBtn: {
        disabled: false,
        time: 30
      },
      rules: {
        email: [
          { required: true, message: this.$i18n.t('login.tab1.emailEmpty') },
          { type: 'email', message: this.$i18n.t('login.tab1.emailInvalid') }
        ],
        password: [
          { required: true, message: this.$i18n.t('login.tab1.passwordEmpty') }
        ],
        mobile: [
          { required: true, message: this.$i18n.t('login.tab2.mobileEmpty') }
        ],
        sms: [
          { required: true, message: this.$i18n.t('login.tab2.smsEmpty') }
        ]
      }
    }
  },
  methods: {
    doSendSms: function () {
      this.smsSendBtn.disabled = true
      const interval = window.setInterval(() => {
        if (--this.smsSendBtn.time <= 0) {
          this.smsSendBtn.time = 30
          this.smsSendBtn.disabled = false
          window.clearInterval(interval)
        }
      }, 1000)
      window.setTimeout(() => {
        this.smsCode = Math.random().toFixed(6).slice(-6)
        this.$notify({
          type: 'success',
          title: '验证码获取成功',
          message: '您的验证码为：' + this.smsCode
        })
      }, 1500)
    },
    doLogin: function () {
      this.errors.e = ''
      this.errors.m = ''
      FormUtils.validForm(this.$refs.loginForm, () => {
        this.loading = true
        const param = this.activeTab === 'E' ? {
          loginType: this.activeTab,
          email: this.request.email,
          password: this.request.password
        } : {
          loginType: this.activeTab,
          mobile: this.request.mobile,
          sms: this.request.sms,
          smsCode: this.smsCode
        }
        HttpUtils.post(this.$API.user.login, param).then(res => {
          // 缓存用户信息
          CacheUtils.setObject(CacheUtils.key.USER_INFO, res)
          // 构建用户路由表
          RouteUtils.loadUserRouters(res.authCodes)
          // 登录成功，跳转至首页
          RouteUtils.goto(MenuUtils.getIndexTab())
        }).catch(err => {
          console.log(err)
          if (this.activeTab === 'E') {
            this.errors.e = err.msg
          } else {
            this.errors.m = err.msg
          }
        }).finally(() => {
          this.loading = false
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .i-user-login {
    .login-form {
      width: 328px;
      margin: 0 auto;
      .i-lang-btn {
        position: relative;
        top: 34px;
        right: -310px;
        cursor: pointer;
        z-index: 999
      }
      .smsSendBtn {
        display: block;
        width: 100%;
      }
      .login-btn {
        padding: 0 15px;
        font-size: 16px;
        height: 40px;
        width: 100%;
      }
      .user-login-other {
        text-align: left;
        margin-top: 24px;
        line-height: 22px;

        .item-icon {
          font-size: 24px;
          color: rgba(0, 0, 0, 0.2);
          margin-left: 16px;
          vertical-align: middle;
          cursor: pointer;
          transition: color 0.3s;

          &:hover {
            color: $--color-primary;
          }
        }
        .user-register-link {
          float: right;
        }
      }
    }
  }
</style>
