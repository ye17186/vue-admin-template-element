<template>
  <div>
    <el-button @click="openSub(1)">openSub1</el-button>
    <el-button @click="openSub(2)">openSub2</el-button>
  </div>
</template>

<script>
import RouteUtils from '../../../../plugins/utils/RouteUtils'

export default {
  name: 'Page2-1',
  methods: {
    openSub: function (index) {
      RouteUtils.goto({
        name: 'Page2-Detail',
        params: {
          detailId: index
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
