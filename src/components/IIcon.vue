<template>
  <i :class="font + ' ' + type">
    <span v-if="title">{{ title }}</span>
    <slot v-else></slot>
  </i>
</template>

<script>
export default {
  name: 'IIcon',
  props: {
    type: String,
    font: {
      type: String,
      default: 'iconfont'
    },
    title: String
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
