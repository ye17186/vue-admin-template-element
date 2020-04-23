<template>
  <span>
    <img class="yc-user-avatar" src="../../assets/image/wx_logo.jpg" alt="用户头像"/>
    <el-dropdown @command="handleCommand" style="cursor: pointer; line-height: 32px;">
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
  </span>
</template>

<script>
import CacheUtils from '../../plugins/utils/CacheUtils'
import StoreUtils from '../../plugins/utils/StoreUtils'
import RouteUtils from '../../plugins/utils/RouteUtils'
import { resetRouter } from '../../router'

export default {
  name: 'YcHeaderBarUser',
  data: function () {
    return {
      user: CacheUtils.getObject(CacheUtils.key.USER_INFO) // 当前登录用户
    }
  },
  methods: {
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
  .yc-user-avatar {
    width: 32px;
    height: 32px;
    border-radius: 5px;
    vertical-align: top;
    margin-right: 5px;
  }
</style>
