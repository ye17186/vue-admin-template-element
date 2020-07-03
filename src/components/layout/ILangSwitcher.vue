<template>
  <el-dropdown size="mini" @command="selectLang">
    <i class="iconfont i-icon-zhongyingwen" :style="'font-size: ' + iconSize + 'px;'"></i>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="zh-CN" :disabled="lang === 'zh-CN'">中文</el-dropdown-item>
      <el-dropdown-item command="en" :disabled="lang === 'en'">English</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: 'ILangSwitcher',
  props: {
    iconSize: {
      type: Number,
      default: 16
    }
  },
  computed: {
    lang: function () {
      return this.$store.state.app.lang
    }
  },
  methods: {
    selectLang: function (lang) {
      this.$i18n.locale = lang
      this.$store.commit('setLang', lang)
    }
  }
}
</script>

<style scoped>

</style>
