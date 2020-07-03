<template>
  <el-cascader ref="chinaAreaSelect"
               :size="size" :disabled="disabled" :clearable="clearable" :show-all-levels="showAllLevels"
               :props="props" @change="handleChange" :value="value"></el-cascader>
</template>

<script>
import data from '../../plugins/china-area-data-v4'
export default {
  name: 'ChinaAreaSelect2',
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
  data: function () {
    const _this = this
    return {
      props: {
        lazy: true,
        lazyLoad: function (node, resolve) {
          setTimeout(() => {
            resolve(_this.getData(node))
          }, 50)
        }
      }
    }
  },
  methods: {
    getData: function (node) {
      let options
      if (node.level === 0) {
        options = data['86']
      } else {
        options = data[node.value]
      }
      let isLeaf = node.level >= this.level - 1
      let arr = []
      if (this.plus) {
        arr.push({
          value: '000000',
          label: '全部',
          leaf: true
        })
      }
      for (let key in options) {
        arr.push({
          value: key,
          label: options[key],
          leaf: isLeaf
        })
      }
      return arr
    },
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
