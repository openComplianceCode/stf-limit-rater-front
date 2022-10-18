module.exports = {
  devServer: {
    disableHostCheck: true,
    proxy: {
      '^/api': {
        target: 'http://localhost:8080',
        headers: {
          'X-Real-IP': '1.2.3.4'
        },
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
