<template>
  <div>
    <yc-header-bar-lock class="header-bar-item" icon-size="20px"></yc-header-bar-lock>
    <yc-header-bar-notice class="header-bar-item" icon-size="20px"></yc-header-bar-notice>
    <yc-header-bar-lang class="header-bar-item" icon-size="20px"></yc-header-bar-lang>
    <img class="yc-user-avatar" src="../../assets/image/logo/wx_logo.jpg" alt="用户头像"/>
    <el-dropdown style="cursor: pointer;" @command="handleCommand">
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
  </div>
</template>

<script>
import CacheUtils from '../../plugins/utils/CacheUtils'
import YcHeaderBarLock from './YcHeaderBarLock'
import YcHeaderBarNotice from './YcHeaderBarNotice'
import YcHeaderBarLang from './YcHeaderBarLang'
import StoreUtils from '../../plugins/utils/StoreUtils'
import RouteUtils from '../../plugins/utils/RouteUtils'
import { resetRouter } from '../../router'
export default {
  name: 'YcHeaderBarBoxRight',
  components: { YcHeaderBarLang, YcHeaderBarNotice, YcHeaderBarLock },
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

<style lang="scss">
  .header-bar-item {
    margin: 0 5px;
    cursor: pointer;
    color: #000000;
  }
  .yc-user-avatar {
    width: 26px;
    height: 26px;
    border-radius: 4px;
    border: 1px solid #eee;
    padding: 2px;
    margin: 0 5px 0 10px;
  }
</style>
