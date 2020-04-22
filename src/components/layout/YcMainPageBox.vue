<template>
  <div class="yc-page-box">
    <div class="yc-page-layout">
      <el-card>
        <transition name="fade">
          <router-view></router-view>
        </transition>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'YcMainPageBox'
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/common";

  .yc-page-box {
    height: calc(100% - 30px);
    overflow: hidden auto;
  @include scrollStyle;

  .yc-page-layout {
    box-sizing: border-box;
    padding: 0 8px;
  }
  }
</style>
