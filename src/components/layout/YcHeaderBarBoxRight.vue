<template>
  <div style="vertical-align: center;">
    <yc-header-bar-lock class="header-bar-item"></yc-header-bar-lock>
    <yc-header-bar-notice class="header-bar-item"></yc-header-bar-notice>
    <yc-header-bar-lang class="header-bar-item"></yc-header-bar-lang>
    <yc-header-bar-user class="header-bar-item" style="margin-left: 30px;"></yc-header-bar-user>
  </div>
</template>

<script>

import YcHeaderBarLock from './YcHeaderBarLock'
import YcHeaderBarNotice from './YcHeaderBarNotice'
import YcHeaderBarUser from './YcHeaderBarUser'
import YcHeaderBarLang from './YcHeaderBarLang'
export default {
  name: 'YcHeaderBarBoxRight',
  components: { YcHeaderBarLang, YcHeaderBarUser, YcHeaderBarNotice, YcHeaderBarLock },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  .header-bar-item {
    display: inline-block;
    margin: 0 5px;
    cursor: pointer;
    vertical-align: middle;
  }
  .yc-user-avatar {
    width: 32px;
    height: 32px;
    border-radius: 5px;
    display: inline-block;
  }
</style>
