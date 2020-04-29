<template>
  <div>
    <demo-section title="基础用法">
      <p slot="desc">在<code>el-checkbox</code>元素中定义<code>v-model</code>绑定变量，
        单一的<code>checkbox</code>中，默认绑定变量的值会是<code>Boolean</code>，选中为<code>true</code>。</p>
      <el-checkbox slot="body" v-model="checked1">备选项</el-checkbox>
    </demo-section>

    <demo-section title="禁用状态">
      <p slot="desc">多选框不可用状态。</p>
      <div slot="body">
        <el-checkbox v-model="checked2" disabled>备选项1</el-checkbox>
        <el-checkbox v-model="checked3" disabled>备选项</el-checkbox>
      </div>
    </demo-section>

    <demo-section title="多选框组">
      <p slot="desc">适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。</p>
      <el-checkbox-group slot="body" v-model="checkList">
        <el-checkbox label="A">复选框 A</el-checkbox>
        <el-checkbox label="B">复选框 B</el-checkbox>
        <el-checkbox label="C">复选框 C</el-checkbox>
        <el-checkbox label="D" disabled>禁用</el-checkbox>
        <el-checkbox label="E" disabled>选中且禁用</el-checkbox>
      </el-checkbox-group>
    </demo-section>

    <demo-section title="indeterminate 状态">
      <p slot="desc"><code>indeterminate</code>属性用以表示<code>checkbox</code>的不确定状态，一般用于实现全选的效果</p>
      <div slot="body">
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll"
                     @change="handleCheckAllChange">全选</el-checkbox>
        <el-checkbox-group v-model="checkList1"  @change="handleCheckedCitiesChange">
          <el-checkbox label="A">上海</el-checkbox>
          <el-checkbox label="B">北京</el-checkbox>
          <el-checkbox label="C">广州</el-checkbox>
          <el-checkbox label="D">深圳</el-checkbox>
        </el-checkbox-group>
      </div>
    </demo-section>

    <demo-section title="可选项目数量的限制">
      <p slot="desc">使用<code>min</code>和<code>max</code>属性能够限制可以被勾选的项目的数量。</p>
      <el-checkbox-group slot="body" v-model="checkList2" :min="1" :max="2">
        <el-checkbox label="A">上海</el-checkbox>
        <el-checkbox label="B">北京</el-checkbox>
        <el-checkbox label="C">广州</el-checkbox>
        <el-checkbox label="D">深圳</el-checkbox>
      </el-checkbox-group>
    </demo-section>

    <demo-section title="按钮样式">
      <p slot="desc">按钮样式的多选组合。</p>
      <div slot="body">
        <el-row style="margin-bottom: 10px;">
          <el-checkbox-group v-model="checkList3">
            <el-checkbox-button label="A">上海</el-checkbox-button>
            <el-checkbox-button label="B">北京</el-checkbox-button>
            <el-checkbox-button label="C">广州</el-checkbox-button>
            <el-checkbox-button label="D">深圳</el-checkbox-button>
          </el-checkbox-group>
        </el-row>
        <el-row>
          <el-checkbox-group v-model="checkList4" size="mini">
            <el-checkbox-button label="A">上海</el-checkbox-button>
            <el-checkbox-button label="B">北京</el-checkbox-button>
            <el-checkbox-button label="C">广州</el-checkbox-button>
            <el-checkbox-button label="D">深圳</el-checkbox-button>
          </el-checkbox-group>
        </el-row>
      </div>
    </demo-section>
  </div>
</template>

<script>
import DemoSection from '../DemoSection'
export default {
  name: 'Checkbox',
  components: { DemoSection },
  data: function () {
    return {
      checked1: true,
      checked2: true,
      checked3: false,
      checkList: ['A', 'E'],
      checkList1: [],
      checkAll: false,
      isIndeterminate: false,
      checkList2: [],
      checkList3: [],
      checkList4: []
    }
  },
  methods: {
    handleCheckAllChange: function (val) {
      this.checkList1 = val ? ['A', 'B', 'C', 'D'] : []
      this.isIndeterminate = false
    },
    handleCheckedCitiesChange: function (value) {
      let checkedCount = value.length
      this.checkAll = checkedCount === 4
      this.isIndeterminate = checkedCount > 0 && checkedCount < 4
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
