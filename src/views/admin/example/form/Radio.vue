<template>
  <div>
    <demo-section title="基础用法">
      <p slot="desc">由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。</p>
      <div slot="body">
        <el-radio v-model="radio1" label="1">备选项1</el-radio>
        <el-radio v-model="radio1" label="2">备选项2</el-radio>
      </div>
    </demo-section>

    <demo-section title="禁用状态">
      <p slot="desc">单选框不可用的状态。</p>
      <div slot="body">
        <el-radio v-model="radio2" label="1" disabled>备选项1</el-radio>
        <el-radio v-model="radio2" label="2" disabled>备选项2</el-radio>
      </div>
    </demo-section>

    <demo-section title="单选框组">
      <p slot="desc">适用于在多个互斥的选项中选择的场景</p>
      <el-radio-group slot="body" v-model="radio3">
        <el-radio :label="1">备选项1</el-radio>
        <el-radio :label="2">备选项2</el-radio>
        <el-radio :label="3">备选项3</el-radio>
      </el-radio-group>
    </demo-section>

    <demo-section title="按钮样式">
      <p slot="desc">按钮样式的单选组合。</p>
      <div slot="body">
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
      </div>
    </demo-section>
  </div>
</template>

<script>
import DemoSection from '../DemoSection'
export default {
  name: 'Radio',
  components: { DemoSection },
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
