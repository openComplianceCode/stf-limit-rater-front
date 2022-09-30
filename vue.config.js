module.exports = {
  devServer: {
    disableHostCheck: true,
    proxy: {
      '^/api': {
        target: 'http://localhost:8080',
        changeOrigin: true
      },
      '/(gitee|github)_redirect': {
        target: 'http://localhost:8080',
        changeOrigin: true
      },
    },
  },
  

  transpileDependencies: ['vuetify'],
}
