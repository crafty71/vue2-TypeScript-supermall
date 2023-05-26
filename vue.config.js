const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // devServer: {
  //   proxy: {
  //     "/api": {
  //       target: "xxx", // 测试
  //       //target: 'http://192.168.100.219:18091', //生产
  //       ws: false,
  //       changeOrigin: true,
  //     },
  //   },
  // },
});
