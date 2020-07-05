<template>
  <div>
    <demo-section title="基本用法">
      <p slot="desc">通过设置<code>level</code>来指定省市联动或者省市区联动，
        <code>plus</code>可以用来添加默认的全部选项</p>
      <div slot="body">
        <div class="m-10-0">
          <span>不带全部选项的省市两级联动：</span>
          <china-area-select v-model="select1" :level="2" @change="select1Change"></china-area-select>
          <span>{{ select1Desc }}</span>
        </div>
        <div class="m-10-0">
          <span>带全部选项的省市两级联动：</span>
          <china-area-select v-model="select2" :level="2" plus @change="select2Change"></china-area-select>
          <span>{{ select2Desc }}</span>
        </div>
        <div class="m-10-0">
          <span>不带全部选项的省市区三级联动：</span>
          <china-area-select v-model="select3" :level="3" @change="select3Change"></china-area-select>
          <span>{{ select3Desc }}</span>
        </div>
        <div class="m-10-0">
          <span>带全部选项的省市区三级联动：</span>
          <china-area-select v-model="select4" :level="3" plus @change="select4Change"></china-area-select>
          <span>{{ select4Desc }}</span>
        </div>
      </div>
    </demo-section>

    <demo-section title="可清空">
      <p slot="desc">通过<code>clearable</code>设置输入框可清空</p>
      <div slot="body">
        <china-area-select clearable v-model="select5"></china-area-select>
      </div>
    </demo-section>

    <demo-section title="仅显示最后一级">
      <p slot="desc">属性<code>show-all-levels</code>定义了是否显示完整的路径，将其赋值为<code>false</code>则仅显示最后一级</p>
      <div slot="body">
        <china-area-select v-model="select5"></china-area-select>
      </div>
    </demo-section>

    <demo-section title="另一种实现方式">
      <p slot="desc">基于原始的china-area-data v4版本数据实现省市区联动</p>
      <div slot="body">
        <div class="m-10-0">
          <span>省市两级联动：</span>
          <china-area-select2 v-model="select6" :level="2" @change="select6Change"></china-area-select2>
          <span>{{ select6Desc }}</span>
        </div>
        <div class="m-10-0">
          <span>省市区三级联动：</span>
          <china-area-select2 v-model="select7" :level="3" plus @change="select7Change"></china-area-select2>
          <span>{{ select7Desc }}</span>
        </div>
      </div>
    </demo-section>
  </div>
</template>

<script>
import DemoSection from '../DemoSection'
import ChinaAreaSelect from '../../../components/select/ChinaAreaSelect'
import ChinaAreaSelect2 from '../../../components/select/ChinaAreaSelect2'
export default {
  name: 'AreaSelect',
  components: { ChinaAreaSelect2, ChinaAreaSelect, DemoSection },
  data: function () {
    return {
      select1: [],
      select1Desc: null,
      select2: [],
      select2Desc: null,
      select3: [],
      select3Desc: null,
      select4: [],
      select4Desc: null,
      select5: [],
      select6: [],
      select6Desc: null,
      select7: [],
      select7Desc: null
    }
  },
  methods: {
    select1Change: function (value) {
      this.select1Desc = value
    },
    select2Change: function (value) {
      this.select2Desc = value
    },
    select3Change: function (value) {
      this.select3Desc = value
    },
    select4Change: function (value) {
      this.select4Desc = value
    },
    select6Change: function (value) {
      this.select6Desc = value
    },
    select7Change: function (value) {
      this.select7Desc = value
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
