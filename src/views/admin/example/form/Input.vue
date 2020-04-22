<template>
  <div class="input-demo">
    {{ $t('el.select.noData') }}
    <section>
      <el-divider content-position="left">基础用法</el-divider>
      <el-input v-model="input" placeholder="请输入内容"></el-input>
    </section>

    <section>
      <el-divider content-position="left">禁用状态</el-divider>
      <el-input v-model="input1" placeholder="请输入内容" disabled></el-input>
    </section>

    <section>
      <el-divider content-position="left">可清空</el-divider>
      <el-input v-model="input2" placeholder="请输入内容" clearable></el-input>
    </section>

    <section>
      <el-divider content-position="left">密码框</el-divider>
      <el-input placeholder="请输入密码" v-model="input3" show-password></el-input>
    </section>

    <section>
      <el-divider content-position="left">带icon的输入框</el-divider>
      <el-input class="m-10-0" placeholder="请选择日期" suffix-icon="el-icon-date" v-model="input4"></el-input>
      <el-input placeholder="请选择日期" prefix-icon="el-icon-date" v-model="input5"></el-input>
    </section>

    <section>
      <el-divider content-position="left">文本域</el-divider>
      <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="input6">
      </el-input>
    </section>

    <section>
      <el-divider content-position="left">可自适应文本高度的文本域</el-divider>
      <el-input class="m-10-0" type="textarea" autosize placeholder="请输入内容" v-model="input7"></el-input>
      <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" v-model="input8"></el-input>
    </section>

    <section>
      <el-divider content-position="left">复合型输入框</el-divider>
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
    </section>
  </div>
</template>

<script>
export default {
  name: 'Input',
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
