<template>
  <el-row type="flex" :gutter="10" style="height: 60px;">
    <yc-header-bar-box-left class="bar-box is-left"></yc-header-bar-box-left>
    <yc-header-bar-box-mid class="bar-box is-mid"></yc-header-bar-box-mid>
    <yc-header-bar-box-right class="bar-box is-right"></yc-header-bar-box-right>
  </el-row>
</template>

<script>
import StoreUtils from '../../plugins/utils/StoreUtils'
import YcHeaderBarBoxRight from './YcHeaderBarBoxRight'
import YcHeaderBarBoxLeft from './YcHeaderBarBoxLeft'
import YcHeaderBarBoxMid from './YcHeaderBarBoxMid'

export default {
  name: 'YcHeaderBox',
  components: { YcHeaderBarBoxMid, YcHeaderBarBoxLeft, YcHeaderBarBoxRight },
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
  .bar-box {
    height: 60px;
    align-items: center;
    &.is-left {
      display: flex;
      width: 380px;
    }
    &.is-mid {
      box-sizing: border-box;
      display: flex;
      padding: 0 50px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    &.is-right {
      position: absolute;
      right: 20px;
      display: flex;
    }
  }
</style>
