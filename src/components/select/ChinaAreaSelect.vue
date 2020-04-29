<template>
  <el-cascader ref="chinaAreaSelect"
               :size="size" :disabled="disabled" :clearable="clearable" :show-all-levels="showAllLevels"
               :options="options" @change="handleChange" :value="value"></el-cascader>
</template>

<script>
import {
  provinceAndCityData,
  provinceAndCityDataPlus,
  regionData,
  regionDataPlus
} from 'element-china-area-data'
export default {
  name: 'ChinaAreaSelect',
  props: {
    value: {
      type: Array
    },
    level: {
      type: Number,
      default: 3
    },
    plus: {
      type: Boolean
    },
    showAllLevels: {
      type: Boolean,
      default: true
    },
    size: {
      type: String
    },
    disabled: {
      type: Boolean
    },
    clearable: {
      type: Boolean
    }
  },
  computed: {
    options: function () {
      let options
      if (this.level === 2) {
        if (this.plus) {
          options = provinceAndCityDataPlus
        } else {
          options = provinceAndCityData
        }
      } else {
        if (this.plus) {
          options = regionDataPlus
        } else {
          options = regionData
        }
      }
      return options
    }
  },
  methods: {
    handleChange: function (value) {
      this.$emit('input', value) // 这个不能缺少，否则不能实现双向绑定
      let checkedLabels = (!value || value.length === 0) ? [] : this.$refs.chinaAreaSelect.getCheckedNodes()[0].pathLabels
      this.$emit('change', {
        values: value,
        labels: checkedLabels
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
