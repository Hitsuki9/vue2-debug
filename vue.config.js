const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        core: resolve(__dirname, 'src/vue/core'),
        shared: resolve(__dirname, 'src/vue/shared'),
        weex: resolve(__dirname, 'src/vue/platforms/weex'),
        compiler: resolve(__dirname, 'src/vue/compiler'),
        web: resolve(__dirname, 'src/vue/platforms/web')
      }
    },
    plugins: [
      new webpack.DefinePlugin({
        __WEEX__: false
      })
    ]
  }
};
