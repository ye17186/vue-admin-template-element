<template>
  <el-row type="flex" align="middle">
    <el-col :span="1">
      <div @click="collapseChange">
        <i :class="'el-icon-exp-bars yc-collapse-btn '  + (collapse ? ' is-active' : '')"></i>
      </div>
    </el-col>
    <el-col :span="8">
      <div class="yc-breads-container">
        <el-breadcrumb separator="/" style="line-height: 60px;">
          <el-breadcrumb-item :to="{name: 'Home'}">首页</el-breadcrumb-item>
          <el-breadcrumb-item v-for="(title, index) in activeFullTitle" :key="index">
            {{ title }}
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </el-col>
    <el-col :span="10">&nbsp;</el-col>
    <el-col :span="5">
      <yc-header-bar-box-right></yc-header-bar-box-right>
    </el-col>
  </el-row>
</template>

<script>
import StoreUtils from '../../plugins/utils/StoreUtils'
import YcHeaderBarBoxRight from './YcHeaderBarBoxRight'

export default {
  name: 'YcHeaderBox',
  components: { YcHeaderBarBoxRight },
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
  .el-dropdown-link {
    cursor: pointer;
  }
</style>
