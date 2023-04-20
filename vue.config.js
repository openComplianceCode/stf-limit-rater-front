module.exports = {
  devServer: {
    disableHostCheck: true,
    port: 8080,
    proxy: {
      '^/api': {
        target: 'http://localhost:8081',
        headers: {
          'X-Real-IP': '1.2.3.4'
        },
        changeOrigin: true
      },
      '/(gitee|github)_redirect': {
        target: 'http://localhost:8081',
        changeOrigin: true
      },
      'auth-redirect': {
        target: 'http://localhost:8081',
        changeOrigin: true
      },
    },
  },
  

  transpileDependencies: ['vuetify'],
}
