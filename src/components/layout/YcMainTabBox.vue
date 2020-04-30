<template>
  <div class="yc-tabs-container">
    <el-tabs class="yc-tabs-box" type="card"
             :value="activePage.name"
             @tab-click="handleTabClick"
             @tab-remove="handleTabRemove">
      <el-tab-pane v-for="tab in pageTabs" :key="tab.name"
                   :name="tab.name" :closable="tab.name !== 'Home'">
        <span slot="label"><i :class="tab.meta.icon"></i> {{tab.meta.title}}</span>
      </el-tab-pane>
    </el-tabs>
    <el-dropdown class="tab-action-btn" size="mini" @command="handleCommand">
      <el-button type="primary" size="mini">
        更多<i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="current">关闭当前</el-dropdown-item>
        <el-dropdown-item command="all">关闭所有</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import PageUtils from '../../plugins/utils/PageUtils'
import RouteUtils from '../../plugins/utils/RouteUtils'

export default {
  name: 'YcMainTabBox',
  computed: {
    activePage: function () {
      return this.$store.state.activePage
    },
    pageTabs: function () {
      return this.$store.state.pageTabs
    }
  },
  methods: {
    /**
     * 页面Tab点击事件：跳转到指定页面
     * @param tab 页面tab对象
     */
    handleTabClick: function (tab) {
      const to = PageUtils.getRouteByPageKey(tab.name)
      if (to && to.name !== this.$route.name) {
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
    handleCommand: function (command) {
      if (command === 'current') {
        this.handleTabRemove(this.activePage.name)
      } else if (command === 'all') {
        PageUtils.removeAllPageTab()
        RouteUtils.goto('Home')
      }
    }
  }
}
</script>

<style lang="scss">
  .yc-tabs-container {
    background-color: #ffffff;
    margin-bottom: 8px;
    height: 30px;
    padding-right: 100px;
    box-sizing: border-box;
    position: relative;
    width: 100%;
    .el-tabs__header {
      margin: 0 !important;
      border: none;
    }
    .el-tabs__item {
      height: 30px !important;
      line-height: 30px !important;
      padding: 0 5px !important;
      &.is-active {
        background-color: #409eff;
        color: #ffffff;
        border-radius: 5px;
      }
    }
    .el-tabs__nav-next, .el-tabs__nav-prev {
      line-height: 30px !important;
    }
    .tab-action-btn {
      position: absolute !important;
      top: 1px;
      right: 10px;
    }
  }
</style>
