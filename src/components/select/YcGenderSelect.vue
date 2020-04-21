<!-- 性别下拉框 -->
<template>
  <el-select :clearable="clearable" :filterable="filterable" :size="size" :disabled="disabled"
             :value="value" @change="handleChange" >
    <el-option v-for="item in options" :key="item.value"
               :label="(showValue && item.value ? (item.value + ' - ') : '') + item.name"
               :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
export default {
  name: 'YcGenderSelect',
  props: {
    value: {
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String
    },
    showValue: {
      type: Boolean,
      default: false
    },
    filterable: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      options: [{
        'value': 'M',
        'name': '男'
      }, {
        'value': 'F',
        'name': '女'
      }, {
        'value': '',
        'name': '无限制'
      }]
    }
  },
  methods: {
    handleChange: function (value) {
      this.$emit('input', value) // 这个不能缺少，否则不能实现双向绑定
      let selectedObj = {
        value: '',
        name: ''
      }

      if (value) {
        const target = this.options.filter(item => {
          return item.value === value
        })[0]
        selectedObj.value = target.value
        selectedObj.name = target.name
      }
      this.$emit('change', selectedObj)
    }
  }
}
</script>

<style scoped>

</style>
