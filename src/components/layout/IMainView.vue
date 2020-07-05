<template>
  <div class="yc-page-box">
    <el-card>
      <transition name="fade">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'IMainView'
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/common";

  .yc-page-box {
    height: calc(100% - 30px);
    overflow: hidden auto;
    @include scrollStyle;
  }
</style>
