<template>
  <div>
    <section>
      <el-divider content-position="left">基础用法</el-divider>
      <el-checkbox v-model="checked1">备选项</el-checkbox>
    </section>

    <section>
      <el-divider content-position="left">禁用状态</el-divider>
      <el-checkbox v-model="checked2" disabled>备选项1</el-checkbox>
      <el-checkbox v-model="checked3" disabled>备选项</el-checkbox>
    </section>

    <section>
      <el-divider content-position="left">多选选框组</el-divider>
      <el-checkbox-group v-model="checkList">
        <el-checkbox label="A">复选框 A</el-checkbox>
        <el-checkbox label="B">复选框 B</el-checkbox>
        <el-checkbox label="C">复选框 C</el-checkbox>
        <el-checkbox label="D" disabled>禁用</el-checkbox>
        <el-checkbox label="E" disabled>选中且禁用</el-checkbox>
      </el-checkbox-group>
    </section>
    <section>
      <el-divider content-position="left">indeterminate 状态</el-divider>
      <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll"
                   @change="handleCheckAllChange">全选</el-checkbox>
      <el-checkbox-group v-model="checkList1"  @change="handleCheckedCitiesChange">
        <el-checkbox label="A">上海</el-checkbox>
        <el-checkbox label="B">北京</el-checkbox>
        <el-checkbox label="C">广州</el-checkbox>
        <el-checkbox label="D">深圳</el-checkbox>
      </el-checkbox-group>
    </section>

    <section>
      <el-divider content-position="left">可选项目数量的限制</el-divider>
      <el-checkbox-group v-model="checkList2" :min="1" :max="2">
        <el-checkbox label="A">上海</el-checkbox>
        <el-checkbox label="B">北京</el-checkbox>
        <el-checkbox label="C">广州</el-checkbox>
        <el-checkbox label="D">深圳</el-checkbox>
      </el-checkbox-group>
    </section>

    <section>
      <el-divider content-position="left">按钮样式</el-divider>
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
    </section>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
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
