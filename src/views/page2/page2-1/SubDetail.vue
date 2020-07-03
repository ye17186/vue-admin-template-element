<template>
  <div>this is detail of {{detailId}}</div>
</template>

<script>
export default {
  name: 'SubDetail',
  data: function () {
    return {
      detailId: ''
    }
  },
  created: function () {
    this.init()
  },
  methods: {
    init: function () {
      this.detailId = this.$route.params.detailId
      console.log(this.detailId)
    }
  }
}
</script>

<style scoped>

</style>
