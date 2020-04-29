<template>
  <el-row :gutter="10">
    <el-col :span="14">
      <el-input placeholder="验证码" :maxlength="codeLength" clearable
                :value="value" @input="handleInput">
        <i class="el-icon-exp-ecurityCode" slot="prepend"></i>
      </el-input>
    </el-col>
    <el-col :span="8">
      <canvas style="display: block; cursor: pointer;" title="看不清？换一张"
              :height="height" :width="width" @click="draw"></canvas>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'YcImgCodeInput',
  props: {
    value: [String, Number],
    codeLength: {
      type: Number,
      default: 4
    },
    height: {
      type: Number,
      default: 40
    },
    width: {
      type: Number,
      default: 100
    }
  },
  data: function () {
    return {
      inputValue: '',
      codeValue: '',
      text: ['2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
      canvas: null
    }
  },
  mounted: function () {
    this.canvas = document.getElementsByTagName('canvas')[0]
    this.draw()
  },
  methods: {
    handleInput: function (value) {
      this.$emit('input', value)
    },
    draw: function () {
      let codes = []
      this.canvas.height = this.height
      this.canvas.width = this.width
      let context = this.canvas.getContext('2d')
      for (let i = 0; i < this.codeLength; i++) {
        let x = i * (20 - this.codeLength / 2)
        let y = this.height / 2 + Math.random()
        let index = Math.floor(Math.random() * 32)
        context.font = 'bold ' + (20 - this.codeLength) + 'px 微软雅黑'
        context.translate(x, y)
        let deg = Math.random() * 60 * Math.PI / 180
        context.rotate(deg) // 使画布旋转任意角度实现验证码不规则旋转
        context.fillText(this.text[index], 0, 0) // 填充文字
        context.rotate(-deg)
        context.translate(-x, -y)
        context.fillStyle = this.color()

        codes.push(this.text[index])
      }
      this.codeValue = codes.join('')
      for (let i = 0; i < 6; i++) {
        context.beginPath()
        context.moveTo(Math.random() * 120, Math.random() * 40)
        context.lineTo(Math.random() * 120, Math.random() * 40)
        context.strokeStyle = this.color()
        context.stroke()
      }

      this.$emit('image-change', this.codeValue)
    },
    color: function () {
      let r = Math.floor(Math.random() * 255)
      let g = Math.floor(Math.random() * 255)
      let b = Math.floor(Math.random() * 255)
      return `rgb(${r},${g},${b})`
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
