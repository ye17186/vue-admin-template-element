<template>
  <el-row>
    <el-col :span="1">
      <div @click="collapseChange">
        <i :class="'el-icon-exp-bars yc-collapse-btn '  + (collapse ? ' is-active' : '')"></i>
      </div>
    </el-col>
    <el-col :span="8">
      <div class="yc-breads-container">
        <el-breadcrumb separator="/" style="line-height: 60px;">
          <el-breadcrumb-item :to="{name: 'Home'}">首页</el-breadcrumb-item>
          <el-breadcrumb-item v-for="(title, index) in activeFullTitle" :key="index">{{ title }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </el-col>
    <el-col :span="10" style="height: 60px;"></el-col>
    <el-col :span="5" style="text-align: right; vertical-align: text-bottom; height: 60px;">
      <div style="height: 100%;">
        <el-dropdown style="margin-top: 40px;" @command="handleCommand">
              <span class="el-dropdown-link">
                {{ user.username }}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <i class="el-icon-bell">
                <el-badge is-dot class="item">&nbsp;消息通知</el-badge>
              </i>
            </el-dropdown-item>
            <el-dropdown-item>
              <i class="el-icon-exp-account">&nbsp;个人中心</i>
            </el-dropdown-item>
            <el-dropdown-item>
              <i class="el-icon-exp-password">&nbsp;修改密码</i>
            </el-dropdown-item>
            <el-dropdown-item command="Logout">
              <i class="el-icon-upload2">&nbsp;安全退出</i>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <img class="yc-user-avatar" src="../../assets/image/wx_logo.jpg" alt="用户头像"/>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import CacheUtils from '../../plugins/utils/CacheUtils'
import StoreUtils from '../../plugins/utils/StoreUtils'
import RouteUtils from '../../plugins/utils/RouteUtils'
import { resetRouter } from '../../router'

export default {
  name: 'YcHeaderBox',
  computed: {
    activeFullTitle: function () {
      let fullTitle = []
      this.$route.matched.forEach(route => {
        if (route.meta.title) {
          fullTitle.push(route.meta.title)
        }
      })
      return fullTitle
    },
    collapse: function () {
      return this.$store.state.collapse
    }
  },
  data: function () {
    return {
      user: CacheUtils.getObject(CacheUtils.key.USER_INFO)
    }
  },
  methods: {
    /**
     * 菜单折叠按钮点击事件
     */
    collapseChange: function () {
      StoreUtils.setCollapse(!this.collapse)
    },
    /**
     * 用户下拉菜单点击事件
     * @param command 菜单命令
     */
    handleCommand: function (command) {
      if (command === 'Logout') { // 安全退出
        this.doLogout()
      }
    },
    /**
     * 用户安全退出
     */
    doLogout: function () {
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
  .yc-collapse-btn {
    line-height: 60px;
    font-size: 32px;
    margin-left: 10px;
    cursor: pointer;
    transform: rotate(0deg);
    transition: 0.3s;
    transform-origin: 50% 50%;
    &.is-active {
      transform: rotate(90deg);
    }
  }
  .el-dropdown-link {
    cursor: pointer;
  }
  .yc-user-avatar {
    width: 50px;
    height: 50px;
    margin-right: 10px;
    border-radius: 5px;
  }
</style>
