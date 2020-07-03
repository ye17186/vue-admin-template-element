<template>
  <div style="height: 100%;">
    <div class="i-logo-box">
      <img :src="collapse ? minLogo : maxLogo" alt="IT小跟班"/>
    </div>
    <div class="i-menu-box">
      <el-menu background-color="#20222a" text-color="#ffffff" active-text-color="#ffffff"
               :unique-opened="true"
               :collapse="collapse"
               :default-active="activeKey"
               @select="handleSelect">
        <template v-for="menuA in menus">
          <template v-if="!menuA.hidden">
            <el-menu-item v-if="!menuA.children" :key="menuA.key" :index="menuA.key">
              <i :class="menuA.icon"></i>
              <span slot="title">{{menuA.title}}</span>
            </el-menu-item>
            <el-submenu v-else :key="menuA.key" :index="menuA.key">
              <template slot="title">
                <i :class="menuA.icon"></i>
                <span slot="title">{{menuA.title}}</span>
              </template>
              <template v-for="menuB in menuA.children">
                <template v-if="!menuB.hidden">
                  <el-menu-item v-if="!menuB.children" :key="menuB.key" :index="menuB.key">
                    <i :class="menuB.icon"></i>
                    <span slot="title">{{menuB.title}}</span>
                  </el-menu-item>
                  <el-submenu v-else :key="menuB.key" :index="menuB.key">
                    <template slot="title">
                      <i :class="menuB.icon"></i>
                      <span slot="title">{{menuB.title}}</span>
                    </template>
                    <template v-for="menuC in menuB.children">
                      <el-menu-item v-if="!menuC.hidden" :key="menuC.key" :index="menuC.key">
                        <i :class="menuC.icon"></i>
                        <span slot="title">{{menuC.title}}</span>
                      </el-menu-item>
                    </template>
                  </el-submenu>
                </template>
              </template>
            </el-submenu>
          </template>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script>
import CacheUtils from '../../plugins/utils/CacheUtils'
import MenuUtils from '../../plugins/utils/MenuUtils'
import RouteUtils from '../../plugins/utils/RouteUtils'

export default {
  name: 'IAsideBox',
  props: {
    minLogo: String,
    maxLogo: String
  },
  computed: {
    collapse: function () {
      return this.$store.state.app.sideCollapsed
    },
    activeKey: function () {
      return this.$store.state.layout.activeKey
    }
  },
  data: function () {
    return {
      menus: []
    }
  },
  created: function () {
    this.init()
  },
  methods: {
    init: function () {
      this.menus = CacheUtils.getObject(CacheUtils.key.USER_MENUS)
    },
    handleSelect: function (key) {
      const menu = MenuUtils.getMenuByKey(key)
      if (menu.target === '_blank') {
        window.open(menu.path)
      } else if (this.activeKey !== key) {
        RouteUtils.goto(menu.path)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/common";
  @mixin iconfont-icon {
    vertical-align: middle;
    margin-right: 5px;
    width: 24px;
    text-align: center;
  }
  .i-logo-box {
    height: 48px;
    width: calc(100% - 15px);
    padding: 5px 7px;
    border-bottom: 2px solid #dcdcdc;
    img {
      background-color: #ffffff;
      height: 50px;
      width: 100%;
      border-radius: 5px;
    }
  }
  .i-menu-box {
    height: calc(100% - 60px);
    width: 200px;
    overflow-y: auto;
    overflow-x: hidden;
    @include scrollStyle;
    .el-menu-item.is-active {
      background-color: rgba(0,0,0,.8) !important;
      border-left: 3px solid $--color-primary;
    }
    [class^='iconfont i-icon-'] {
      @include iconfont-icon
    }
  }
</style>
