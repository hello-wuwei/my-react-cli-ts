const merge = require('webpack-merge');
const common = require('./webpack.base.config.js');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');  // 这个插件不被 webpack 官方文档所收录

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      // 这里有小伙伴可能会疑惑为什么不是 '../public/index.html'
      // 我的理解是无论与要用的template是不是在一个目录，都是从根路径开始查找
      template: 'public/index.html',
      inject: 'body',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
    new CleanWebpackPlugin()
  ],

  /* cacheGroups对象，定义了需要被抽离的模块，其中test属性是比较关键的一个值，
  他可以是一个字符串，也可以是正则表达式，还可以是函数。如果定义的是字符串，会匹配入口模块名称，
  会从其他模块中把包含这个模块的抽离出来。name是抽离后生成的名字，和入口文件模块名称相同，
  这样抽离出来的新生成的framework模块会覆盖被抽离的framework模块，虽然他们都叫framework。vendors这个缓存组，
  它的test设置为 /node_modules/ 表示只筛选从node_modules文件夹下引入的模块，所以所有第三方模块才会被拆分出来
  */
  optimization: {
    minimizer: [new UglifyJsPlugin()],  // 我们需要把打包生成的js文件尽可能压缩，以便减少文件体积，更快地被用户加载。
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      cacheGroups: {
        framework: {
          test: "framework",
          name: "framework",
          enforce: true
        },
        vendors: {
          priority: -10,
          test: /node_modules/,
          name: "vendor",
          enforce: true,
        },
      }
    }
  }
});