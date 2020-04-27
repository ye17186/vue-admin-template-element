<template>
  <div>
    <demo-section title="基础用法">
      <p slot="desc">适用广泛的基础单选</p>
      <div slot="body">
        <el-select placeholder="请选择" v-model="select1.value" :value="select1.value">
          <el-option v-for="item in select1.options" :key="item.value"
            :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </div>
    </demo-section>

    <demo-section title="有禁用选项">
      <p slot="desc">在<code>el-option</code>中，设定<code>disabled</code>值为<code>true</code>，即可禁用该选项</p>
      <div slot="body">
        <el-select placeholder="请选择" v-model="select2.value" :value="select2.value">
          <el-option v-for="item in select2.options" :key="item.value"
                     :disabled="item.disabled" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </div>
    </demo-section>

    <demo-section title="禁用状态">
      <p slot="desc">为<code>el-select</code>设置<code>disabled</code>属性，则整个选择器不可用</p>
      <div slot="body">
        <el-select placeholder="请选择" disabled v-model="select3.value" :value="select3.value">
          <el-option v-for="item in select3.options" :key="item.value"
                     :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </div>
    </demo-section>

    <demo-section title="可清空单选">
      <p slot="desc">为<code>el-select</code>设置<code>clearable</code>属性，则可将选择器清空。需要注意的是，<code>clearable</code>属性仅适用于单选。</p>
      <div slot="body">
        <el-select placeholder="请选择" clearable v-model="select4.value" :value="select4.value">
          <el-option v-for="item in select4.options" :key="item.value"
                     :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </div>
    </demo-section>

    <demo-section title="基础多选">
      <p slot="desc">为<code>el-select</code>设置<code>multiple</code>属性即可启用多选，此时<code>v-model</code>的值为当前选中值所组成的数组。
        默认情况下选中值会以 Tag 的形式展现，你也可以设置<code>collapse-tags</code>属性将它们合并为一段文字。</p>
      <div slot="body">
        <el-select placeholder="请选择" multiple
                   v-model="select5.value" :value="select5.value">
          <el-option v-for="item in select5.options" :key="item.value"
                     :label="item.label" :value="item.value">
          </el-option>
        </el-select>

        <el-select style="margin-left: 10px;" placeholder="请选择" multiple collapse-tags
                   v-model="select5.value" :value="select5.value">
          <el-option v-for="item in select5.options" :key="item.value"
                     :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </div>
    </demo-section>

    <demo-section title="自定义模板">
      <p slot="desc">将自定义的HTML模板插入<code>el-option</code>的slot中即可。</p>
      <div slot="body">
        <el-select placeholder="请选择" clearable v-model="select6.value" :value="select6.value">
          <el-option v-for="item in select6.options" :key="item.value" :value="item.value">
            <span style="float: left">{{ item.label }}</span>
            <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
          </el-option>
        </el-select>
      </div>
    </demo-section>

    <demo-section title="分组">
      <p slot="desc">使用<code>el-option-group</code>对备选项进行分组，它的<code>label</code>属性为分组名</p>
      <div slot="body">
        <el-select placeholder="请选择" clearable v-model="select7.value" :value="select7.value">
          <el-option-group v-for="group in select7.options" :key="group.label"
                           :label="group.label">
            <el-option v-for="item in group.options" :key="item.value"
                       :label="item.label" :value="item.value">
            </el-option>
          </el-option-group>
        </el-select>
      </div>
    </demo-section>

    <demo-section title="可搜索">
      <p slot="desc">为<code>el-select</code>添加<code>filterable</code>属性即可启用搜索功能。
        默认情况下，<code>Select</code>会找出所有<code>label</code>属性包含输入值的选项。
        如果希望使用其他的搜索逻辑，可以通过传入一个<code>filter-method</code>来实现。
        <code>filter-method</code>为一个<code>Function</code>，它会在输入值发生变化时调用，参数为当前输入值。</p>
      <div slot="body">
        <el-select placeholder="请选择" filterable v-model="select8.value" :value="select6.value">
          <el-option v-for="item in select6.options" :key="item.value"
                     :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </div>
    </demo-section>

    <demo-section title="ttt">
      <yc-china-area-select slot="body"></yc-china-area-select>
    </demo-section>
  </div>
</template>

<script>
import DemoSection from '../DemoSection'
import YcChinaAreaSelect from '../../../../components/select/YcChinaAreaSelect'
export default {
  name: 'Select',
  components: { YcChinaAreaSelect, DemoSection },
  data: function () {
    return {
      select1: {
        value: '',
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }]
      },
      select2: {
        value: '',
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶',
          disabled: true
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }]
      },
      select3: {
        value: '',
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }]
      },
      select4: {
        value: '',
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }]
      },
      select5: {
        value: '',
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }]
      },
      select6: {
        value: '',
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }]
      },
      select7: {
        value: '',
        options: [{
          label: '热门城市',
          options: [{
            value: 'Shanghai',
            label: '上海'
          }, {
            value: 'Beijing',
            label: '北京'
          }]
        }, {
          label: '城市名',
          options: [{
            value: 'Chengdu',
            label: '成都'
          }, {
            value: 'Shenzhen',
            label: '深圳'
          }, {
            value: 'Guangzhou',
            label: '广州'
          }, {
            value: 'Dalian',
            label: '大连'
          }]
        }]
      },
      select8: {
        value: '',
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }]
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
