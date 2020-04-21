<template>
  <div>
    <section>
      <el-divider content-position="left">常见页面布局1</el-divider>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </section>
    <section>
      <el-divider content-position="left">常见页面布局2</el-divider>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </section>
    <section>
      <el-divider content-position="left">常见页面布局3</el-divider>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </section>
    <section>
      <el-divider content-position="left">常见页面布局4</el-divider>
      <el-container>
        <el-header>Header</el-header>
        <el-container>
          <el-aside width="200px">Aside</el-aside>
          <el-main>Main</el-main>
        </el-container>
      </el-container>
    </section>
    <section>
      <el-divider content-position="left">常见页面布局5</el-divider>
      <el-container>
        <el-header>Header</el-header>
        <el-container>
          <el-aside width="200px">Aside</el-aside>
          <el-container>
            <el-main>Main</el-main>
            <el-footer>Footer</el-footer>
          </el-container>
        </el-container>
      </el-container>
    </section>
    <section>
      <el-divider content-position="left">常见页面布局6</el-divider>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-header>Header</el-header>
          <el-main>Main</el-main>
        </el-container>
      </el-container>
    </section>
    <section>
      <el-divider content-position="left">常见页面布局7</el-divider>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-header>Header</el-header>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Container'
}
</script>

<style lang="scss" scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
