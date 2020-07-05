<template>
  <div style="height: 100%;">
    <i-main-tabs style="margin-bottom: 5px;"></i-main-tabs>
    <i-main-view style="padding: 0 6px;"></i-main-view>
  </div>
</template>

<script>
import IMainView from './IMainView'
import IMainTabs from './IMainTabs'

export default {
  name: 'YcMainBox',
  components: { IMainTabs, IMainView }
}
</script>

<style lang="scss" scoped>
</style>
