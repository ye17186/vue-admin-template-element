<template>
  <div style="height: 100%;">
    <div class="yc-logo-box">
      <img :src="collapse ? $CONFIG.web.logo.min : $CONFIG.web.logo.max" alt="IT小跟班"/>
    </div>
    <div class="yc-menu-box">
      <el-menu background-color="#20222a" text-color="#ffffff" active-text-color="#ffffff"
               :unique-opened="true"
               :collapse="collapse"
               :default-active="activePage.name"
               :router="true">
        <template v-if="menus.children">
          <template v-for="menuA in menus.children">
            <template v-if="!menuA.meta.hidden">
              <el-menu-item v-if="!menuA.children" :key="menuA.name"
                            :index="menuA.name" :route="menuA">
                <i :class="menuA.meta.icon"></i>
                <span slot="title">{{menuA.meta.title}}</span>
              </el-menu-item>
              <el-submenu v-else :key="menuA.name"
                          :index="menuA.name">
                <template slot="title">
                  <i :class="menuA.meta.icon"></i>
                  <span slot="title">{{menuA.meta.title}}</span>
                </template>
                <template v-for="menuB in menuA.children">
                  <template v-if="!menuB.meta.hidden">
                    <el-menu-item v-if="!menuB.children" :key="menuB.name"
                                  :index="menuB.name" :route="menuB">
                      <i :class="menuB.meta.icon"></i>
                      <span slot="title">{{menuB.meta.title}}</span>
                    </el-menu-item>
                    <el-submenu v-else :key="menuB.name"
                                :index="menuB.name">
                      <template slot="title">
                        <i :class="menuB.meta.icon"></i>
                        <span slot="title">{{menuB.meta.title}}</span>
                      </template>
                      <template v-for="menuC in menuB.children">
                        <el-menu-item v-if="!menuC.meta.hidden" :key="menuC.name"
                                      :index="menuC.name" :route="menuC">
                          <i :class="menuC.meta.icon"></i>
                          <span slot="title">{{menuC.meta.title}}</span>
                        </el-menu-item>
                      </template>
                    </el-submenu>
                  </template>
                </template>
              </el-submenu>
            </template>
          </template>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script>
import CacheUtils from '../../plugins/utils/CacheUtils'

export default {
  name: 'YcAsideBox',
  computed: {
    collapse: function () {
      return this.$store.state.collapse
    },
    activePage: function () {
      return this.$store.state.activePage
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
      this.menus = CacheUtils.getObject(CacheUtils.key.USER_ROUTES)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/common";
  .yc-logo-box {
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
  .yc-menu-box {
    height: calc(100% - 60px);
    width: 200px;
    overflow-y: auto;
    overflow-x: hidden;
    @include scrollStyle;
    .el-menu-item.is-active {
      background-color: rgba(0,0,0,.8) !important;
      border-left: 4px solid #409eff;
    }
  }
</style>
