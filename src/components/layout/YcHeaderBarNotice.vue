<template>
  <span>
    <el-tooltip effect="dark" placement="top-start"
                :content="$t('headerBar.notice.tip')">
      <el-badge :value="200" :max="99" is-dot>
        <i class="el-icon-bell" :style="'font-size:' + iconSize + ';'"></i>
      </el-badge>
    </el-tooltip>
  </span>
</template>

<script>
export default {
  name: 'YcHeaderBarNotice',
  props: {
    iconSize: {
      type: String,
      default: '20px'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
