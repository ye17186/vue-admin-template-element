<template>
  <el-cascader :options="options" :props="props"></el-cascader>
</template>

<script>
import options from '../../assets/config/china-area-data-v4'
export default {
  name: 'YcChinaAreaSelect',
  data: function () {
    return {
      props: {
        label: 'name'
      },
      options: options
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
