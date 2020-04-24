<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {}
}
</script>

<style lang="scss">
  html, body {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
    #app {
      width: 100%;
      height: 100%;
      min-width: 900px;
    }
  }
</style>
