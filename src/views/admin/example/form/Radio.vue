<template>
  <div>
    <section>
      <el-divider content-position="left">基础用法</el-divider>
      <el-radio v-model="radio1" label="1">备选项1</el-radio>
      <el-radio v-model="radio1" label="2">备选项2</el-radio>
    </section>

    <section>
      <el-divider content-position="left">禁用状态</el-divider>
      <el-radio v-model="radio2" label="1" disabled>备选项1</el-radio>
      <el-radio v-model="radio2" label="2" disabled>备选项2</el-radio>
    </section>

    <section>
      <el-divider content-position="left">单选框组</el-divider>
      <el-radio-group v-model="radio3">
        <el-radio :label="1">备选项1</el-radio>
        <el-radio :label="2">备选项2</el-radio>
        <el-radio :label="3">备选项3</el-radio>
      </el-radio-group>
    </section>

    <section>
      <el-divider content-position="left">按钮样式</el-divider>
      <el-row style="margin-bottom: 10px;">
        <el-radio-group v-model="radio4">
          <el-radio-button :label="1">上海</el-radio-button>
          <el-radio-button :label="2">北京</el-radio-button>
          <el-radio-button :label="3">广州</el-radio-button>
          <el-radio-button :label="4">深圳</el-radio-button>
        </el-radio-group>
      </el-row>
      <el-row>
        <el-radio-group v-model="radio4" size="mini">
          <el-radio-button :label="1">上海</el-radio-button>
          <el-radio-button :label="2">北京</el-radio-button>
          <el-radio-button :label="3">广州</el-radio-button>
          <el-radio-button :label="4">深圳</el-radio-button>
        </el-radio-group>
      </el-row>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Radio',
  data: function () {
    return {
      radio1: '1',
      radio2: '2',
      radio3: 3,
      radio4: 2
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
