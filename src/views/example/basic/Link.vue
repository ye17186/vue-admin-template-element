<template>
  <div>
    <demo-section title="基础用法">
      <p slot="desc">基础的文字链接用法。</p>
      <div slot="body">
        <el-link href="https://blog.it-follower.com" target="_blank">默认链接</el-link>
        <el-link type="primary">主要链接</el-link>
        <el-link type="success">成功链接</el-link>
        <el-link type="warning">警告链接</el-link>
        <el-link type="danger">危险链接</el-link>
        <el-link type="info">信息链接</el-link>
      </div>
    </demo-section>

    <demo-section title="禁用状态">
      <p slot="desc">文字链接不可用状态。</p>
      <div slot="body">
        <el-link disabled>默认链接</el-link>
        <el-link type="primary" disabled>主要链接</el-link>
        <el-link type="success" disabled>成功链接</el-link>
        <el-link type="warning" disabled>警告链接</el-link>
        <el-link type="danger" disabled>危险链接</el-link>
        <el-link type="info" disabled>信息链接</el-link>
      </div>
    </demo-section>

    <demo-section title="下划线">
      <p slot="desc">文字链接下划线。</p>
      <div slot="body">
        <el-link :underline="false">无下划线</el-link>
        <el-link>有下划线</el-link>
      </div>
    </demo-section>

    <demo-section title="图标">
      <p slot="desc">带图标的文字链接可增强辨识度。</p>
      <div slot="body">
        <el-link icon="el-icon-edit">编辑</el-link>
        <el-link>查看<i class="el-icon-view el-icon--right"></i> </el-link>
      </div>
    </demo-section>
  </div>
</template>

<script>
import DemoSection from '../DemoSection'
export default {
  name: 'Link',
  components: { DemoSection }
}
</script>

<style lang="scss" scoped>
  a.el-link {
    margin: 0 10px;
  }
</style>
