<template>
  <canvas id="canvas" style="display: block;" height="40" width="100"></canvas>
</template>
<script>
export default {
  name: 'YcImgCode',
  data: function () {
    return {
      arr: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'],
      context: null,
      canvas: null
    }
  },
  mounted: function () {
    this.canvas = document.getElementsByTagName('canvas')[0]
    this.context = this.canvas.getContext('2d')
    this.draw()
  },
  methods: {
    draw: function () {
      // this.context.strokeRect(0, 0, 120, 40)
      for (let i = 0; i < 4; i++) {
        let x = i * 20 + 20
        let y = 20 + 10 * Math.random()
        let index = Math.floor(Math.random() * 14)
        this.context.font = 'bold 20px 微软雅黑'
        this.context.translate(x, y)
        let deg = Math.random() * 90 * Math.PI / 180
        this.context.rotate(deg) // 使画布旋转任意角度实现验证码不规则旋转
        this.context.fillText(this.arr[index], 0, 0) // 填充文字
        this.context.rotate(-deg)
        this.context.translate(-x, -y)
        this.context.fillStyle = this.color()
      }

      for (let i = 0; i < 8; i++) {
        this.context.beginPath()
        this.context.moveTo(Math.random() * 120, Math.random() * 40)
        this.context.lineTo(Math.random() * 120, Math.random() * 40)
        this.context.strokeStyle = this.color()
        this.context.stroke()
      }

      for (let i = 0; i < 20; i++) {
        this.context.beginPath()
        let x = Math.random() * 120
        let y = Math.random() * 40
        this.context.moveTo(x, y)
        this.context.moveTo(x + 1, y + 1)
        this.context.strokeStyle = this.color()
        this.context.stroke()
      }
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
