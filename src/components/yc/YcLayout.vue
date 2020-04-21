<template>
  <el-container class="yc-layout-container">
    <el-aside :width="isCollapse ? '65px' : '200px'" class="yc-aside-container">
      <div class="yc-logo-container">
        <img src="../../assets/image/wx_logo.jpg" alt="IT小跟班"/>
      </div>
      <div class="yc-menu-container">
        <el-menu background-color="#20222a" text-color="#fff" active-text-color="#fff"
                 :unique-opened="true"
                 :collapse="isCollapse"
                 :default-active="activePage.name"
                 :router="true">
          <template v-if="menus.children">
            <template v-for="menuA in menus.children">
              <template v-if="!menuA.meta.hidden">
                <el-menu-item v-if="!menuA.children" :key="menuA.name"
                              :index="menuA.name" :route="menuA">
                  <i :class="menuA.meta.icon"></i>
                  <span slot="title">{{menuA.meta.title}}</span>
                </el-menu-item>
                <el-submenu v-else :key="menuA.name"
                            :index="menuA.name">
                  <template slot="title">
                    <i :class="menuA.meta.icon"></i>
                    <span slot="title">{{menuA.meta.title}}</span>
                  </template>
                  <template v-for="menuB in menuA.children">
                    <template v-if="!menuB.meta.hidden">
                      <el-menu-item v-if="!menuB.children" :key="menuB.name"
                                    :index="menuB.name" :route="menuB">
                        <i :class="menuB.meta.icon"></i>
                        <span slot="title">{{menuB.meta.title}}</span>
                      </el-menu-item>
                      <el-submenu v-else :key="menuB.name"
                                  :index="menuB.name">
                        <template slot="title">
                          <i :class="menuB.meta.icon"></i>
                          <span slot="title">{{menuB.meta.title}}</span>
                        </template>
                        <template v-for="menuC in menuB.children">
                          <el-menu-item v-if="!menuC.meta.hidden" :key="menuC.name"
                                        :index="menuC.name" :route="menuC">
                            <i :class="menuC.meta.icon"></i>
                            <span slot="title">{{menuC.meta.title}}</span>
                          </el-menu-item>
                        </template>
                      </el-submenu>
                    </template>
                  </template>
                </el-submenu>
              </template>
            </template>
          </template>
        </el-menu>
      </div>
    </el-aside>
    <el-container>
      <el-header  class="yc-header-container">
        <el-row>
          <el-col :span="1">
            <div @click="isCollapse = !isCollapse">
              <i :class="'el-icon-exp-bars yc-collapse-btn '  + (isCollapse ? ' is-active' : '')"></i>
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
              <img class="yc-user-avatar" src="../../assets/image/wx_logo.jpg" />
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-main class="yc-main-container">
        <div class="yc-tabs-box">
          <el-tabs class="yc-tabs-container" type="card" closable
                   :value="activePage.name"
                   @tab-click="handleTabClick"
                   @tab-remove="handleTabRemove">
            <el-tab-pane v-for="tab in pageTabs" :key="tab.name"
                         :name="tab.name">
              <span slot="label"><i :class="tab.meta.icon"></i> {{tab.meta.title}}</span>
            </el-tab-pane>
          </el-tabs>
          <el-dropdown class="tab-action-btn">
            <el-button type="primary" size="mini">
              更多<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>关闭当前</el-dropdown-item>
              <el-dropdown-item>关闭所有</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="yc-page-container-layout">
          <div class="yc-page-container">
            <el-card>
              <transition name="fade">
                <router-view></router-view>
              </transition>
            </el-card>
          </div>
        </div>
      </el-main>
      <el-footer height="30px" class="yc-footer-container">
        Power By IT小跟班 @2019
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
import CacheUtils from '../../plugins/utils/CacheUtils'
import RouteUtils from '../../plugins/utils/RouteUtils'
import { resetRouter } from '../../router'
import PageUtils from '../../plugins/utils/PageUtils'
import StoreUtils from '../../plugins/utils/StoreUtils'

export default {
  name: 'YcLayout',
  data: function () {
    return {
      isCollapse: false,
      menus: [],
      user: CacheUtils.getObject(CacheUtils.key.USER_INFO)
    }
  },
  computed: {
    activePage: function () {
      return this.$store.state.activePage
    },
    activeFullTitle: function () {
      let fullTitle = []
      this.$route.matched.forEach(route => {
        if (route.meta.title) {
          fullTitle.push(route.meta.title)
        }
      })
      return fullTitle
    },
    pageTabs: function () {
      return this.$store.state.pageTabs
    }
  },
  created: function () {
    this.init()
  },
  methods: {
    init: function () {
      this.menus = CacheUtils.getObject(CacheUtils.key.USER_ROUTES)
    },
    /**
     * 页面Tab点击事件：跳转到指定页面
     * @param tab 页面tab对象
     */
    handleTabClick: function (tab) {
      const to = PageUtils.getRouteByPageKey(tab.name)
      if (to) {
        RouteUtils.goto(to)
      }
    },
    /**
     * 页面Tab删除事件：关闭指定页面Tab，并跳转到上一个打开的页面
     * @param tabName 删除的页面名
     */
    handleTabRemove: function (tabName) {
      const newTab = PageUtils.removePageTab(tabName)
      RouteUtils.goto(newTab)
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

<style lang="scss">
  @import "../../assets/css/common";
  .yc-layout-container {
    height: 100%;
    width: 100%;
    .yc-aside-container {
      background-color: #20222a;
      overflow: hidden;
      transition: width .3s;
      -moz-transition: width .3s;
      -webkit-transition: width .3s;
      -o-transition: width .3s;
      .yc-logo-container {
        height: 48px;
        width: calc(100% - 15px);
        border-bottom: 2px solid #dcdcdc;
        padding: 5px 7px;
        img {
          height: 50px;
          width: 100%;
          border-radius: 5px;
        }
      }
      .yc-menu-container {
        height: calc(100% - 60px);
        width: 200px;
        overflow-y: auto;
        overflow-x: hidden;
        @include scrollStyle;
        .el-menu-item.is-active {
          background-color: rgba(0,0,0,.8) !important;
          border-left: 4px solid #409eff;
        }
      }
    }
    .yc-header-container {
      background-color: #fff;
      border-bottom: 2px solid #dcdcdc;
      padding: 0;
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
    }
    .yc-main-container {
      background-color: #f0f2f5;
      padding: 0;
      height: 100%;
      width: 100%;
      overflow: hidden;
      .yc-tabs-box {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        .yc-tabs-container {
          border-bottom: 2px solid #dcdcdc;
          height: 30px;

        }
        .tab-action-btn {
          position: absolute !important;
          top: 1px;
          right: 10px;
        }
      }
      .yc-page-container-layout {
        height: calc(100% - 30px);
        overflow: hidden auto;
        @include scrollStyle;
      }
      .yc-page-container {
        box-sizing: border-box;
        padding: 0 8px;
      }
    }
    .yc-footer-container {
      line-height: 30px;
      text-align: center;
      padding: 0;
      background-color: #f0f2f5;
      color: #767676;
    }
  }
</style>
<style lang="scss">
  .yc-aside-container {
    .el-menu {
      border-right: none !important;
    }
  }
  .yc-tabs-container {
    background-color: #ffffff;
    margin-bottom: 10px;
    .el-tabs__header {
      margin: 0;
      height: 30px;
    }
    .el-tabs__nav .el-tabs__item:nth-child(1) span.el-icon-close{
      display: none;
    }
    .el-tabs__item {
      height: 30px !important;
      line-height: 30px !important;
      padding: 0 10px !important;
      &.is-active {
        background-color: #409eff;
        color: #ffffff;
        border-bottom: 1px solid #fff;
      }
    }
    .el-tabs__nav-next, .el-tabs__nav-prev {
      line-height: 30px !important;
    }
  }
</style>
