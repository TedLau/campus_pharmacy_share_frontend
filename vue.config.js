const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8081', // 将后端服务器端口更改为 8081
        changeOrigin: true,
      },
    },
  },
},
)
