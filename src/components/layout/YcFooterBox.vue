<template>
  <el-footer height="30px" class="yc-footer-container">
    {{ $CONFIG.footer }}
  </el-footer>
</template>

<script>
export default {
  name: 'YcFooterBox'
}
</script>

<style lang="scss" scoped>
  .yc-footer-container {
    line-height: 30px;
    text-align: center;
    padding: 0;
    background-color: #f0f2f5;
    color: #767676;
  }

</style>
