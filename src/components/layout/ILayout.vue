<template>
  <el-container class="yc-layout-container">
    <el-aside :class="'yc-aside-container' + (collapse ? ' is-collapse' : '')">
      <i-aside-box :min-logo="siteConfig.web.logo.min"
                   :max-logo="siteConfig.web.logo.max"></i-aside-box>
    </el-aside>
    <el-container>
      <el-header  class="yc-header-container">
        <i-header-box></i-header-box>
      </el-header>
      <el-main class="yc-main-container">
        <yc-main-box></yc-main-box>
      </el-main>
      <el-footer height="30px" class="yc-footer-container">
        {{ $CONFIG.web.footer }}
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
import IHeaderBox from './IHeaderBox'
import YcMainBox from './YcMainBox'
import IAsideBox from './IAsideBox'

export default {
  name: 'ILayout',
  components: { IAsideBox, YcMainBox, IHeaderBox },
  computed: {
    collapse: function () {
      return this.$store.state.app.sideCollapsed
    }
  },
  data () {
    return {
      siteConfig: this.$CONFIG
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
</style>
