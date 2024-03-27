module.exports = defineConfig({
  transpileDependencies: true,
  filenameHashing: true,
  configureWebpack: (config) => {
    config.output.filename = 'js/[name].[hash].js'
    config.output.chunkFilename = 'js/[name].[hash].js'
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/test/vue_test/' : '/',
})