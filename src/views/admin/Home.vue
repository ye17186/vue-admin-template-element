<template>
  <div>
    <el-divider>更新日志</el-divider>
    <el-row>
      <el-col :span="12">
        <el-timeline resource>
          <el-timeline-item v-for="(log, index) in logs" :key="index"
                            :timestamp="log.date" placement="top" :color="index === 0 ? '#0bbd87': '' ">
            <el-card>
              <h4>{{ log.title }}</h4>
              <p v-for="(item, index) in log.items" :key="index">{{ (index + 1) + '、' + item }}</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </el-col>
      <el-col :span="12"></el-col>
    </el-row>
  </div>
</template>

<script>
import logs from '../../assets/config/log'
export default {
  name: 'Home',
  data: function () {
    return {
      logs: logs
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
