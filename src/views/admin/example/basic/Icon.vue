<template>
  <div>
    <demo-section title="使用方法">
      <p slot="desc">直接通过设置类名为<code>el-icon-iconName</code>来使用即可。例如：</p>
      <div slot="body">
        <i class="el-icon-edit"></i>
        <i class="el-icon-share"></i>
        <i class="el-icon-delete"></i>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
      </div>
    </demo-section>

    <demo-section title="图标集合">
      <ul slot="body" class="icon-list">
        <li v-for="(item, index) in icons" :key="index">
          <span>
            <i :class="item"></i><span class="icon-name">{{ item }}</span>
          </span>
        </li>
      </ul>
    </demo-section>
  </div>
</template>

<script>
import DemoSection from '../DemoSection'
export default {
  name: 'Icon',
  components: { DemoSection },
  data: function () {
    return {
      icons: [
        'el-icon-platform-eleme', 'el-icon-eleme', 'el-icon-delete-solid', 'el-icon-delete', 'el-icon-s-tools', 'el-icon-setting',
        'el-icon-user-solid', 'el-icon-user', 'el-icon-phone', 'el-icon-phone-outline', 'el-icon-more', 'el-icon-more-outline',
        'el-icon-star-on', 'el-icon-star-off', 'el-icon-s-goods', 'el-icon-goods', 'el-icon-warning', 'el-icon-warning-outline',
        'el-icon-question', 'el-icon-info', 'el-icon-remove', 'el-icon-circle-plus', 'el-icon-success', 'el-icon-error',
        'el-icon-zoom-in', 'el-icon-zoom-out', 'el-icon-remove-outline', 'el-icon-circle-plus-outline', 'el-icon-circle-check', 'el-icon-circle-close',
        'el-icon-s-help', 'el-icon-help', 'el-icon-minus', 'el-icon-plus', 'el-icon-check', 'el-icon-close',
        'el-icon-picture', 'el-icon-picture-outline', 'el-icon-picture-outline-round', 'el-icon-upload', 'el-icon-upload2', 'el-icon-download',
        'el-icon-camera-solid', 'el-icon-camera', 'el-icon-video-camera-solid', 'el-icon-video-camera', 'el-icon-message-solid', 'el-icon-bell',
        'el-icon-s-cooperation', 'el-icon-s-order', 'el-icon-s-platform', 'el-icon-s-fold', 'el-icon-s-unfold', 'el-icon-s-operation',
        'el-icon-s-promotion', 'el-icon-s-home', 'el-icon-s-release', 'el-icon-s-ticket', 'el-icon-s-management', 'el-icon-s-open',
        'el-icon-s-shop', 'el-icon-s-marketing', 'el-icon-s-flag', 'el-icon-s-comment', 'el-icon-s-finance', 'el-icon-s-claim',
        'el-icon-s-custom', 'el-icon-s-opportunity', 'el-icon-s-data', 'el-icon-s-check', 'el-icon-s-grid', 'el-icon-s-menu',
        'el-icon-share', 'el-icon-d-caret', 'el-icon-caret-left', 'el-icon-caret-right', 'el-icon-caret-bottom', 'el-icon-caret-top',
        'el-icon-bottom-left', 'el-icon-bottom-right', 'el-icon-back', 'el-icon-right', 'el-icon-bottom', 'el-icon-top',
        'el-icon-top-left', 'el-icon-top-right', 'el-icon-arrow-left', 'el-icon-arrow-right', 'el-icon-arrow-down', 'el-icon-arrow-up',
        'el-icon-d-arrow-left', 'el-icon-d-arrow-right', 'el-icon-video-pause', 'el-icon-video-play', 'el-icon-refresh', 'el-icon-refresh-right',
        'el-icon-refresh-left', 'el-icon-finished', 'el-icon-sort', 'el-icon-sort-up', 'el-icon-sort-down', 'el-icon-rank',
        'el-icon-loading', 'el-icon-view', 'el-icon-c-scale-to-original', 'el-icon-date', 'el-icon-edit', 'el-icon-edit-outline',
        'el-icon-folder', 'el-icon-folder-opened', 'el-icon-folder-add', 'el-icon-folder-remove', 'el-icon-folder-delete', 'el-icon-folder-checked'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  i {
    margin: 0 20px;
  }

  .icon-list {
    overflow: hidden;
    list-style: none;
    padding: 0 !important;
    border: 1px solid #eaeefb;
    border-radius: 4px;

    li {
      float: left;
      width: 16.66%;
      text-align: center;
      height: 120px;
      line-height: 120px;
      color: #666;
      font-size: 13px;
      border-right: 1px solid #eee;
      border-bottom: 1px solid #eee;
      margin-right: -1px;
      margin-bottom: -1px;
      span {
        line-height: normal;
        font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
        color: #99a9bf;
        transition: color .15s linear;
        display: inline-block;
        vertical-align: middle;
      }

      i {
        display: block;
        font-size: 32px;
        margin-bottom: 15px;
        color: #606266;
        transition: color .15s linear;
        &:hover {
          cursor: pointer;
          color: #409eff;
        }
      }
    }
  }
</style>
