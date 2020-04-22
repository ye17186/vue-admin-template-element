<template>
  <div style="height: 100%;">
    <yc-main-tab-box></yc-main-tab-box>
    <yc-main-page-box></yc-main-page-box>
  </div>
</template>

<script>
import YcMainTabBox from './YcMainTabBox'
import YcMainPageBox from './YcMainPageBox'

export default {
  name: 'YcMainBox',
  components: { YcMainPageBox, YcMainTabBox }
}
</script>

<style lang="scss" scoped>
</style>
