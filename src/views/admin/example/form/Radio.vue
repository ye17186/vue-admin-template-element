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
  </div>
</template>

<script>
export default {
  name: 'Radio',
  data: function () {
    return {
      radio1: '1',
      radio2: '2',
      radio3: 3
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
