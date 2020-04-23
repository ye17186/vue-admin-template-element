<template>
  <span>
    <el-tooltip effect="dark" content="锁屏" placement="top-start">
      <i class="el-icon-lock" @click="show = true"></i>
    </el-tooltip>

    <el-dialog title="设置锁屏密码" width="30%"  :visible.sync="show">
      <el-form ref="LockForm" label-width="80px" :model="form">
        <el-form-item label="锁屏密码" prop="lockPwd"
                      verify :empty-message="$t('headerBar.lock.lockPwdEmpty')">
          <el-input v-model="form.lockPwd"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="position: absolute; right: 0;" type="primary" @click="lock">确 定</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </span>
</template>

<script>
import CacheUtils from '../../plugins/utils/CacheUtils'
import RouteUtils from '../../plugins/utils/RouteUtils'

export default {
  name: 'YcHeaderBarLock',
  data: function () {
    return {
      show: false,
      form: {
        lockPwd: ''
      }
    }
  },
  methods: {
    lock: function () {
      CacheUtils.setObject(CacheUtils.key.LOCK_PWD, this.form.lockPwd)
      RouteUtils.goto('Lock')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
