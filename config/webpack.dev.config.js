const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.base.config.js');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


/* HotModuleReplacementPlugin是webpack热更新的插件，设置devServer.hot为true，
并且在plugins中引入HotModuleReplacementPlugin插件即可。
还需要注意的是我们开启了hot，那么导出不能使用chunkhash，需要替换为hash。
*/

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: 'js/[name].[hash:8].bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    open: true,
    port: 9000,
    compress: true,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      inject: 'body',
      hash: false
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
});