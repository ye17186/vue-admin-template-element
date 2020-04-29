<!-- 语言切换功能菜单 -->
<template>
  <el-dropdown size="mini" @command="handleLang">
    <i class="el-icon-platform-eleme" :style="'font-size:' + iconSize + ';'"></i>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="zh-CN">中文</el-dropdown-item>
      <el-dropdown-item command="en">English</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>

import StoreUtils from '../../plugins/utils/StoreUtils'

export default {
  name: 'YcHeaderBarLang',
  props: {
    iconSize: {
      type: String,
      default: '20px'
    }
  },
  data: function () {
    return {
    }
  },
  methods: {
    handleLang: function (lang) {
      this.$i18n.locale = lang
      StoreUtils.setLang(lang)
      localStorage.setItem('lang', lang)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
