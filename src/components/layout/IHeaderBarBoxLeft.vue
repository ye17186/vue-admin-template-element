<template>
  <div>
    <i :class="'iconfont i-icon-menu yc-collapse-btn '  + (collapse ? ' is-active' : '')"
       @click="collapseChange"></i>
<!--    <i :class="'yc-collapse-btn ' + (collapse ? 'el-icon-s-unfold' : 'el-icon-exp-bars')"-->
<!--       @click="collapseChange"></i>-->
    <el-breadcrumb separator="/">
      <transition-group name="breadcrumb">
        <el-breadcrumb-item :to="indexTab" key="-1">{{ indexTab.meta.title }}</el-breadcrumb-item>
        <el-breadcrumb-item v-for="(item, index) in titles" :key="index + item">{{ item }}</el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
  </div>
</template>

<script>

import MenuUtils from '../../plugins/utils/MenuUtils'

export default {
  name: 'IHeaderBarBoxLeft',
  computed: {
    titles: function () {
      const activeKey = this.$store.state.layout.activeKey
      const menu = MenuUtils.getMenuByKey(activeKey)
      return menu.titles
    },
    collapse: function () {
      return this.$store.state.app.sideCollapsed
    }
  },
  created: function () {
    const cache = localStorage.getItem('sideCollapsed')
    this.$store.commit('setSideCollapsed', cache === 'true')
  },
  data () {
    return {
      indexTab: MenuUtils.getIndexTab()
    }
  },
  methods: {
    /**
     * 菜单折叠按钮点击事件
     */
    collapseChange: function () {
      this.$store.commit('setSideCollapsed', !this.collapse)
    }
  }
}
</script>

<style lang="scss" scoped>
  .yc-collapse-btn {
    line-height: 60px;
    font-size: 32px;
    margin-left: 6px;
    margin-right: 10px;
    cursor: pointer;
    transform: rotate(0deg);
    transition: 0.3s;
    transform-origin: 50% 50%;
    display: inline-block;
    &.is-active {
      transform: rotate(90deg);
    }
  }

  .breadcrumb-enter-active,
  .breadcrumb-leave-active {
    transition: all .5s;
  }

  .breadcrumb-enter,
  .breadcrumb-leave-active {
    opacity: 0;
    transform: translateX(20px);
  }

  .breadcrumb-move {
    transition: all .5s;
  }

  .breadcrumb-leave-active {
    position: absolute;
  }
</style>
