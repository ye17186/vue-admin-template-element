<template>
  <div class="i-tabs-container">
    <el-tabs class="i-tabs-box" type="card"
             :value="activeKey"
             @tab-click="handleTabClick"
             @tab-remove="handleTabRemove">
      <el-tab-pane v-for="tab in openedTabs" :key="tab.meta.key"
                   :name="tab.meta.key" :closable="tab.meta.key !== indexKey">
        <span slot="label"><i :class="tab.meta.icon"></i> {{tab.meta.title}}</span>
      </el-tab-pane>
    </el-tabs>
    <el-dropdown class="tab-action-btn" size="mini" @command="handleCommand">
      <el-button type="primary" size="mini" icon="iconfont i-icon-more">
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-if="!isIndex" command="other">关闭其他</el-dropdown-item>
        <el-dropdown-item command="all">关闭所有</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import MenuUtils from '../../plugins/utils/MenuUtils'
import RouteUtils from '../../plugins/utils/RouteUtils'

export default {
  name: 'IMainTabs',
  computed: {
    activeKey: function () {
      return this.$store.state.layout.activeKey
    },
    isIndex: function () {
      return MenuUtils.isIndex(this.$store.state.layout.activeKey)
    },
    openedTabs: function () {
      return this.$store.state.layout.openedTabs
    }
  },
  data () {
    return {
      indexKey: MenuUtils.getIndexKey()
    }
  },
  methods: {
    /**
       * 页面Tab点击事件：跳转到指定页面
       * @param tab 页面tab对象
       */
    handleTabClick: function (tab) {
      const tabKey = tab.name
      const to = this.$store.state.layout.openedTabs.find(item => {
        return item.meta.key === tabKey
      })
      RouteUtils.goto(to)
    },
    /**
       * 页面Tab删除事件：关闭指定页面Tab，并跳转到上一个打开的页面
       * @param tabName 删除的页面名
       */
    handleTabRemove: function (tabName) {
      const activeKey = this.$store.state.layout.activeKey
      this.$store.commit('removeOpenedTabs', tabName)
      if (activeKey === tabName) {
        const len = this.$store.state.layout.sortedTabKeys.length
        if (len > 1) {
          const to = this.$store.state.layout.sortedTabKeys[len - 1]
          RouteUtils.gotoByKey(to)
        } else {
          RouteUtils.gotoByKey(MenuUtils.getIndexKey())
        }
      }
    },
    handleCommand: function (command) {
      if (command === 'current') { // 关闭当前
        this.handleTabRemove(this.activeKey)
      } else if (command === 'other') { // 关闭其他
        this.$store.commit('removeOtherOpenedTabs', this.activeKey)
      } else if (command === 'all') { // 关闭所有
        if (MenuUtils.isIndex(this.activeKey)) {
          this.$store.commit('removeOtherOpenedTabs', this.activeKey)
        } else {
          this.$store.commit('removeAllOpenedTabs')
          RouteUtils.gotoByKey(this.indexKey)
        }
      }
    }
  }
}
</script>

<style lang="scss">
  .i-tabs-container {
    background-color: #ffffff;
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
        color: #ffffff;
        background-color: $--color-primary;
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
