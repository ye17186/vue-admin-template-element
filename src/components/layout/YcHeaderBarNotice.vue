<template>
  <span>
    <el-tooltip effect="dark" placement="top-start"
                :content="$t('headerBar.notice.tip')">
      <el-badge :value="200" :max="99" is-dot>
        <el-popover trigger="click" width="300">
          <i class="el-icon-bell" slot="reference" :style="'font-size:' + iconSize + ';'"></i>
          <el-tabs v-model="activeTab">
            <el-tab-pane :label="$t('headerBar.notice.email') + '(' + news.email + ')'" name="email">邮件</el-tab-pane>
            <el-tab-pane :label="$t('headerBar.notice.notice') + '(' + news.notice + ')'" name="notice">通知</el-tab-pane>
            <el-tab-pane :label="$t('headerBar.notice.message') + '(' + news.message + ')'" name="message">消息</el-tab-pane>
          </el-tabs>
        </el-popover>
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
  },
  data: function () {
    return {
      activeTab: 'email',
      news: {
        email: 3,
        notice: '5',
        message: '9'
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
