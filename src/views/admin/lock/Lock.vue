<template>
  <div class="lock-container">
    <div class="lock-form">
      <div class="animated" :class="{'shake': pwdError, 'bounceOut': pass}">
        <h3 class="title"></h3>
        <el-input placeholder="请输入解锁密码" type="password" v-model="pwd"
                  @keyup.enter.native="handleUnlock">
          <el-tooltip slot="append" content="解锁" placement="top">
            <el-button icon="el-icon-unlock" @click="handleUnlock"></el-button>
          </el-tooltip>
          <el-tooltip slot="append" content="退出登录" placement="top">
            <el-button icon="el-icon-upload2" @click="handleLogout"></el-button>
          </el-tooltip>
        </el-input>
      </div>
    </div>
  </div>
</template>

<script>
import CacheUtils from '../../../plugins/utils/CacheUtils'
import StoreUtils from '../../../plugins/utils/StoreUtils'
import { resetRouter } from '../../../router'
import RouteUtils from '../../../plugins/utils/RouteUtils'

export default {
  name: 'Lock',
  data: function () {
    return {
      pwd: '',
      pwdError: false,
      pass: false
    }
  },
  computed: {
    activePage: function () {
      return this.$store.state.activePage
    }
  },
  methods: {
    handleUnlock: function () {
      const lockPwd = CacheUtils.getObject(CacheUtils.key.LOCK_PWD)
      if (this.pwd === lockPwd) {
        this.pass = true
        setTimeout(() => {
          CacheUtils.clear(CacheUtils.key.LOCK_PWD)
          RouteUtils.goto(this.activePage.name ? this.activePage.name : 'Home')
        }, 500)
      } else {
        this.pwd = ''
        this.$message({
          message: '解锁密码错误',
          type: 'error'
        })
        this.pwdError = true
        setTimeout(() => {
          this.pwdError = false
        }, 1000)
      }
    },
    handleLogout: function () {
      // 清空缓存
      CacheUtils.clearAll()
      // 重置vuex
      StoreUtils.resetAll()
      // 重置路由
      resetRouter()
      // 跳转至登录页
      RouteUtils.goto('Login')
    }
  }
}
</script>

<style lang="scss" scoped>
  .lock-container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    .title {
      margin-bottom: 8px;
      color: #333;
    }
  }

  .lock-container::before {
    z-index: -999;
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url("../../../assets/image/bg/lock.png");
    background-size: cover;
  }

  .lock-form {
    width: 300px;
  }
</style>
