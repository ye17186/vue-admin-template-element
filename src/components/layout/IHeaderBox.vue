<template>
  <el-row type="flex" style="height: 60px;">
    <i-header-bar-box-left class="bar-box is-left"></i-header-bar-box-left>
    <i-header-bar-box-mid class="bar-box is-mid"></i-header-bar-box-mid>
    <i-header-bar-box-right class="bar-box is-right"></i-header-bar-box-right>
  </el-row>
</template>

<script>
import IHeaderBarBoxRight from './IHeaderBarBoxRight'
import IHeaderBarBoxLeft from './IHeaderBarBoxLeft'
import IHeaderBarBoxMid from './IHeaderBarBoxMid'

export default {
  name: 'IHeaderBox',
  components: { IHeaderBarBoxMid, IHeaderBarBoxLeft, IHeaderBarBoxRight }
}
</script>

<style lang="scss" scoped>
  .bar-box {
    height: 60px;
    align-items: center;
    &.is-left {
      display: flex;
      width: 380px;
    }
    &.is-mid {
      box-sizing: border-box;
      display: flex;
      padding: 0 50px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    &.is-right {
      position: absolute;
      right: 20px;
      display: flex;
    }
  }
</style>
