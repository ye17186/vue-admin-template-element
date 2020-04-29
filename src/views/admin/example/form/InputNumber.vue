<template>
  <div>
    <demo-section title="基础用法">
      <p slot="desc">要使用它，只需要在<code>el-input-number</code>元素中使用
        <code>v-model</code>绑定变量即可，变量的初始值即为默认值。</p>
      <el-input-number slot="body" v-model="inputNum1" :min="1" :max="10" label="描述文字"></el-input-number>
    </demo-section>

    <demo-section title="禁用状态">
      <el-input-number slot="body" v-model="inputNum2" disabled></el-input-number>
    </demo-section>

    <demo-section title="步数">
      <p slot="desc">允许定义递增递减的步数控制。设置<code>step</code>属性可以控制步长，接受一个<code>Number</code>。</p>
      <el-input-number slot="body" v-model="inputNum3" :step="2"></el-input-number>
    </demo-section>

    <demo-section title="严格部署">
      <p slot="desc"><code>step-strictly</code> 属性接受一个<code>Boolean</code>。如果这个属性被设置为<code>true</code>，则只能输入步数的倍数。</p>
      <el-input-number slot="body" v-model="inputNum4" :step="2" step-strictly></el-input-number>
    </demo-section>

    <demo-section title="精度">
      <p slot="desc"><code>precision</code>的值必须是一个非负整数，并且不能小于<code>step</code>的小数位数。</p>
      <el-input-number slot="body" v-model="inputNum5" :precision="2" :step="0.1"></el-input-number>
    </demo-section>

    <demo-section title="尺寸">
      <p slot="desc">额外提供了<code>medium</code>、<code>small</code>、<code>mini</code>三种尺寸的数字输入框</p>
      <el-input-number slot="body" v-model="inputNum5" :precision="2" :step="0.1"></el-input-number>
    </demo-section>
  </div>
</template>

<script>
import DemoSection from '../DemoSection'
export default {
  name: 'InputNumber',
  components: { DemoSection },
  data: function () {
    return {
      inputNum1: 0,
      inputNum2: 1,
      inputNum3: 0,
      inputNum4: 0,
      inputNum5: '0.00'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
