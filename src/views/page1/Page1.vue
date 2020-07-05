<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="16">
        <el-row :gutter="20">
          <el-col :span="6">
            <el-input size="small" placeholder="手机号" clearable
                      v-model="Request.FilterRequest.mobile"></el-input>
          </el-col>
          <el-col :span="6">
            <el-input size="small" placeholder="用户名" clearable
                      v-model="Request.FilterRequest.username"></el-input>
          </el-col>
          <el-col :span="6">
            <yc-gender-select size="small" show-value clearable
                              v-model="Request.FilterRequest.gender"
                              :value="Request.FilterRequest.gender"></yc-gender-select>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="8" style="text-align: right;">
        <el-button size="small" icon="el-icon-exp-refresh" @click="doReset">重置</el-button>
        <el-button size="small" type="primary" icon="el-icon-exp-search" @click="doFilter">查询</el-button>
      </el-col>
    </el-row>
    <el-divider class="m-10-0"></el-divider>
    <el-table class="yc-table" size="small" stripe v-loading="false"
              :data="tableData">
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column prop="mobile" label="手机号"></el-table-column>
      <el-table-column prop="username" label="用户名"></el-table-column>
      <el-table-column prop="gender" label="性别" :formatter="genderFormatter"></el-table-column>
      <el-table-column prop="age" label="年龄"></el-table-column>
      <el-table-column prop="address" label="家庭住址" show-overflow-tooltip></el-table-column>
    </el-table>
    <el-pagination style="text-align: right;" layout="total, prev, pager, next" :total="1000"></el-pagination>
  </div>
</template>

<script>
import YcGenderSelect from '../../components/select/YcGenderSelect'
import formatter from '../../plugins/formatter/labelFormatter'
import YcQueryDivider from '../../components/layout/YcQueryDivider'
export default {
  name: 'Page1',
  components: { YcQueryDivider, YcGenderSelect },
  data: function () {
    return {
      formatter: formatter,
      Request: {
        FilterRequest: {
          mobile: '',
          username: '',
          gender: null
        }
      },
      tableData: [
        {
          mobile: '13277033197',
          username: 'Sheep',
          gender: 'M',
          age: 21,
          address: '湖北省鄂州市鄂城区花湖镇华山村叶家楼105号'
        }, {
          mobile: '13277033197',
          username: 'Sheep',
          gender: 'M',
          age: 21
        }, {
          mobile: '13277033197',
          username: 'Sheep',
          gender: 'M',
          age: 21
        }, {
          mobile: '13277033197',
          username: 'Sheep',
          gender: 'M',
          age: 21
        }, {
          mobile: '13277033197',
          username: 'Sheep',
          gender: 'M',
          age: 21
        }, {
          mobile: '13277033197',
          username: 'Sheep',
          gender: 'M',
          age: 21
        }, {
          mobile: '13277033197',
          username: 'Sheep',
          gender: 'M',
          age: 21
        }, {
          mobile: '13277033197',
          username: 'Sheep',
          gender: 'M',
          age: 21
        }, {
          mobile: '13277033197',
          username: 'Sheep',
          gender: 'M',
          age: 21
        }, {
          mobile: '13277033196',
          username: 'Fish',
          gender: 'F',
          age: 22
        }
      ]
    }
  },
  methods: {
    doReset: function () {
      const FilterRequest = this.Request.FilterRequest
      FilterRequest.mobile = ''
      FilterRequest.username = ''
      FilterRequest.gender = null
    },
    doFilter: function () {
      console.log(this.Request.FilterRequest)
    },
    genderFormatter: function (row) {
      return formatter.gender(row.gender, true)
    }
  }
}
</script>

<style lang="scss">
  @import "../../assets/css/common";
  .yc-table {
    .el-table__body-wrapper {
     @include scrollStyle;
    }
  }
</style>
