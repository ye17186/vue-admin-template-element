<template>
  <div>
    <i :class="'el-icon-exp-bars yc-collapse-btn '  + (collapse ? ' is-active' : '')"
       @click="collapseChange"></i>
    <el-breadcrumb separator="/">
      <transition-group name="breadcrumb">
        <el-breadcrumb-item :to="{name: 'Home'}" key="-1">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-for="item in activePage" :key="item.path">
          {{ item.meta.title }}
        </el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
  </div>
</template>

<script>
import StoreUtils from '../../plugins/utils/StoreUtils'

export default {
  name: 'YcHeaderBarBoxLeft',
  computed: {
    activePage: function () {
      let target = []
      this.$route.matched.forEach(route => {
        if (route.meta.title) {
          target.push(route)
        }
      })
      return target
    },
    collapse: function () {
      return this.$store.state.collapse
    }
  },
  methods: {
    /**
     * 菜单折叠按钮点击事件
     */
    collapseChange: function () {
      StoreUtils.setCollapse(!this.collapse)
    }
  }
}
</script>

<style lang="scss" scoped>
  .yc-collapse-btn {
    line-height: 60px;
    font-size: 32px;
    margin-left: 10px;
    cursor: pointer;
    transform: rotate(0deg);
    transition: 0.3s;
    transform-origin: 50% 50%;
    display: inline-block;
    margin-right: 20px;

    &.is-active {
      transform: rotate(90deg);
    }
  }

  .breadcrumb-enter-active,
  .breadcrumb-leave-active {
    transition: all .5s;
  }

  .breadcrumb-enter,
  .breadcrumb-leave-active {
    opacity: 0;
    transform: translateX(20px);
  }

  .breadcrumb-move {
    transition: all .5s;
  }

  .breadcrumb-leave-active {
    position: absolute;
  }
</style>
