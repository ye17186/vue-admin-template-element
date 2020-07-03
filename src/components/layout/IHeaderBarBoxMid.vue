<template>
  <div>
    <el-link class="top-bar-link" icon="iconfont i-icon-blogger" :underline="false" target="_blank"
             :href="$CONFIG.web.blog">个人博客</el-link>
    <el-link class="top-bar-link" icon="iconfont i-icon-github-fill" :underline="false" target="_blank"
             :href="$CONFIG.web.github">GitHub</el-link>
  </div>
</template>

<script>

export default {
  name: 'IHeaderBarBoxMid'
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
