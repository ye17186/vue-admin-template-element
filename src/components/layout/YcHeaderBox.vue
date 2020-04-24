<template>
  <el-row type="flex" align="middle" :gutter="10">
    <el-col :span="10">
      <i :class="'el-icon-exp-bars yc-collapse-btn '  + (collapse ? ' is-active' : '')"
         @click="collapseChange"></i>
      <el-breadcrumb class="yc-title-breads" separator="/">
        <el-breadcrumb-item :to="{name: 'Home'}">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-for="(title, index) in activeFullTitle" :key="index">
          {{ title }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>
    <el-col :span="8" style="text-align: right;">
      <el-link class="top-bar-link" icon="el-icon-s-help" :underline="false" target="_blank"
               :href="$CONFIG.web.blog">个人博客</el-link>
      <el-link class="top-bar-link" icon="el-icon-s-help" :underline="false" target="_blank"
               :href="$CONFIG.web.github">GitHub</el-link>
    </el-col>
    <el-col :span="6" style="text-align: right;">
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

  .yc-title-breads {
    line-height: 60px;
    position: absolute;
    left: 60px;
    display: inline-block;
  }

  .el-dropdown-link {
    cursor: pointer;
  }

  .top-bar-link {
    margin: 0 5px;
  }
</style>
