<template>
  <el-container class="yc-layout-container">
    <el-aside :class="'yc-aside-container' + (collapse ? ' is-collapse' : '')">
      <yc-aside-box></yc-aside-box>
    </el-aside>
    <el-container>
      <el-header  class="yc-header-container">
        <yc-header-box></yc-header-box>
      </el-header>
      <el-main class="yc-main-container">
        <yc-main-box></yc-main-box>
      </el-main>
      <el-footer height="30px" class="yc-footer-container">
        <yc-footer-box></yc-footer-box>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
import YcAsideBox from './layout/YcAsideBox'
import YcHeaderBox from './layout/YcHeaderBox'
import YcMainBox from './layout/YcMainBox'
import YcFooterBox from './layout/YcFooterBox'

export default {
  name: 'YcLayout',
  components: { YcFooterBox, YcMainBox, YcHeaderBox, YcAsideBox },
  computed: {
    collapse: function () {
      return this.$store.state.collapse
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
      width: 200px !important;
      overflow: hidden;
      transition: width .3s;
      -moz-transition: width .3s;
      -webkit-transition: width .3s;
      -o-transition: width .3s;

      &.is-collapse {
        width: 65px !important;
      }
    }

    .yc-header-container {
      background-color: #fff;
      border-bottom: 2px solid #dcdcdc;
      padding: 0;
    }

    .yc-main-container {
      background-color: #f0f2f5;
      padding: 0;
      height: 100%;
      width: 100%;
      overflow: hidden;
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
