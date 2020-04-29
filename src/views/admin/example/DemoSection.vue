<template>
  <section>
    <el-divider :content-position="titlePosition">{{ title }}</el-divider>
    <div><slot name="desc"></slot></div>
    <div><slot name="body"></slot></div>
  </section>
</template>

<script>
export default {
  name: 'DemoSection',
  props: {
    title: {
      type: String
    },
    titlePosition: {
      type: String,
      default: 'left'
    }
  }
}
</script>

<style lang="scss" scoped>
  code {
    border: 1px solid #eaeefb;
    color: #5e6d82;
    background-color: #e6effb;
    margin: 0 4px;
    display: inline-block;
    padding: 1px 5px;
    font-size: 12px;
    border-radius: 3px;
    height: 18px;
    line-height: 18px;
  }
  p {
    font-size: 14px;
    line-height: 22px;
    color: #666;
    word-break: break-word;
    margin: 10px;
    background-color: #fff;
  }
</style>
