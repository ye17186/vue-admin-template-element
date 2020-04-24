<template>
  <div class="input-demo">
    <demo-section title="基础用法">
      <el-input slot="body" v-model="input" placeholder="请输入内容"></el-input>
    </demo-section>

    <demo-section title="禁用状态">
      <el-input v-model="input1" placeholder="请输入内容" disabled></el-input>
    </demo-section>

    <demo-section title="可清空">
      <el-input slot="body" v-model="input2" placeholder="请输入内容" clearable></el-input>
    </demo-section>

    <demo-section title="密码框">
      <el-input slot="body" placeholder="请输入密码" v-model="input3" show-password></el-input>
    </demo-section>

    <demo-section title="带icon的输入框">
      <p slot="desc">带有图标标记输入类型</p>
      <div slot="body">
        <el-input class="m-10-0" placeholder="请选择日期" suffix-icon="el-icon-date" v-model="input4"></el-input>
        <el-input placeholder="请选择日期" prefix-icon="el-icon-date" v-model="input5"></el-input>
      </div>
    </demo-section>

    <demo-section title="文本域">
      <p slot="desc">用于输入多行文本信息，通过将<code>type</code>属性的值指定为<code>textarea</code>。</p>
      <el-input slot="body" type="textarea" :rows="2" placeholder="请输入内容"
                v-model="input6"></el-input>
    </demo-section>

    <demo-section title="可自适应文本高度的文本域">
      <p slot="desc">通过设置<code>autosize</code>属性可以使得文本域的高度能够根据文本内容自动进行调整，
        并且<code>autosize</code>还可以设定为一个对象，指定最小行数和最大行数。</p>
      <div slot="body">
        <el-input class="m-10-0" type="textarea" autosize placeholder="请输入内容"
                  v-model="input7"></el-input>
        <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容"
                  v-model="input8"></el-input>
      </div>
    </demo-section>

    <demo-section title="复合型输入框">
      <p>可前置或后置元素，一般为标签或按钮</p>
      <div slot="body">
        <el-input placeholder="请输入内容" v-model="input9">
          <template slot="prepend">Http://</template>
        </el-input>
        <el-input class="m-10-0" placeholder="请输入内容" v-model="input10">
          <template slot="append">.com</template>
        </el-input>
        <el-input placeholder="请输入内容" v-model="input11">
          <el-select slot="prepend" placeholder="请选择" v-model="select" :value="select" style="width: 130px;">
            <el-option label="餐厅名" value="1"></el-option>
            <el-option label="订单号" value="2"></el-option>
            <el-option label="用户电话" value="3"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </demo-section>
  </div>
</template>

<script>
import DemoSection from '../DemoSection'
export default {
  name: 'Input',
  components: { DemoSection },
  data: function () {
    return {
      input: '',
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '',
      input6: '',
      input7: '',
      input8: '',
      input9: '',
      input10: '',
      input11: '',
      select: ''
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
