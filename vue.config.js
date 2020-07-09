module.exports = {
  publicPath: './',
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/css/_variable.scss";`
      }
    }
  }
}
