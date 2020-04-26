<template>
  <div>
    <i :class="'el-icon-exp-bars yc-collapse-btn '  + (collapse ? ' is-active' : '')"
       @click="collapseChange"></i>
    <el-breadcrumb class="yc-title-breads" separator="/">
      <el-breadcrumb-item :to="{name: 'Home'}">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="(title, index) in activeFullTitle" :key="index">
        {{ title }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
import StoreUtils from '../../plugins/utils/StoreUtils'

export default {
  name: 'YcHeaderBarBoxLeft',
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
  methods: {
    /**
     * 菜单折叠按钮点击事件
     */
    collapseChange: function () {
      StoreUtils.setCollapse(!this.collapse)
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
    display: inline-block;

    &.is-active {
      transform: rotate(90deg);
    }
  }

  .yc-title-breads {
    margin-left: 20px;
  }
</style>
