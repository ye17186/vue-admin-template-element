<template>
  <div>
    <el-link class="top-bar-link" icon="el-icon-s-help" :underline="false" target="_blank"
             :href="$CONFIG.web.blog">个人博客</el-link>
    <el-link class="top-bar-link" icon="el-icon-s-help" :underline="false" target="_blank"
             :href="$CONFIG.web.github">GitHub</el-link>
  </div>
</template>

<script>
import StoreUtils from '../../plugins/utils/StoreUtils'

export default {
  name: 'YcHeaderBarBoxMid',
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

    &.is-active {
      transform: rotate(90deg);
    }
  }

  .top-bar-link {
    margin: 0 5px;
  }
</style>
