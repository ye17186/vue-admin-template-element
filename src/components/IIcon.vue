<template>
  <i :class="'iconfont ' + name"></i>
</template>

<script>
export default {
  name: 'IIcon',
  props: {
    name: String
  }
}
</script>

<style scoped>
 i {
   speak: none;
   font-style: normal;
   font-weight: normal;
   font-variant: normal;
   text-transform: none;
   line-height: 1;
   vertical-align: baseline;
   display: inline-block;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
 }
</style>
