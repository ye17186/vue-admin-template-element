<template>
  <div>
    <i-header-bar-lock class="header-bar-item" :icon-size="20"></i-header-bar-lock>
    <i-header-bar-notice class="header-bar-item" :icon-size="20"></i-header-bar-notice>
    <i-lang-switcher class="header-bar-item" :icon-size="20"></i-lang-switcher>
    <img class="yc-user-avatar" src="../../assets/image/logo/wx_logo.jpg" alt="用户头像"/>
    <el-dropdown style="cursor: pointer;" @command="handleCommand">
      <span class="el-dropdown-link">
        {{ user.username }}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>
          <i class="iconfont i-icon-bell">
            <el-badge is-dot class="item">&nbsp;消息通知</el-badge>
          </i>
        </el-dropdown-item>
        <el-dropdown-item>
          <i class="iconfont i-icon-gerenzhongxin">&nbsp;个人中心</i>
        </el-dropdown-item>
        <el-dropdown-item>
          <i class="iconfont i-icon-xiugaimima">&nbsp;修改密码</i>
        </el-dropdown-item>
        <el-dropdown-item command="Logout">
          <i class="iconfont i-icon-logout">&nbsp;安全退出</i>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import CacheUtils from '../../plugins/utils/CacheUtils'
import IHeaderBarLock from './IHeaderBarLock'
import IHeaderBarNotice from './IHeaderBarNotice'
import ILangSwitcher from './ILangSwitcher'
export default {
  name: 'IHeaderBarBoxRight',
  components: { ILangSwitcher, IHeaderBarNotice, IHeaderBarLock },
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
      window.location.reload()
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
