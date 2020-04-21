<template>
  <div>
    <section>
      <el-divider content-position="left">基础用法</el-divider>
      <el-row>
        <el-link href="https://blog.it-follower.com" target="_blank">默认链接</el-link>
        <el-link type="primary">主要链接</el-link>
        <el-link type="success">成功链接</el-link>
        <el-link type="warning">警告链接</el-link>
        <el-link type="danger">危险链接</el-link>
        <el-link type="info">信息链接</el-link>
      </el-row>
    </section>

    <section>
      <el-divider content-position="left">禁用状态</el-divider>
      <el-link disabled>默认链接</el-link>
      <el-link type="primary" disabled>主要链接</el-link>
      <el-link type="success" disabled>成功链接</el-link>
      <el-link type="warning" disabled>警告链接</el-link>
      <el-link type="danger" disabled>危险链接</el-link>
      <el-link type="info" disabled>信息链接</el-link>
    </section>

    <section>
      <el-divider content-position="left">下划线</el-divider>
      <el-link :underline="false">无下划线</el-link>
      <el-link>有下划线</el-link>
    </section>

    <section>
      <el-divider content-position="left">图标</el-divider>
      <el-link icon="el-icon-edit">编辑</el-link>
      <el-link>查看<i class="el-icon-view el-icon--right"></i> </el-link>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Link'
}
</script>

<style lang="scss" scoped>
  a.el-link {
    margin: 0 10px;
  }
</style>
