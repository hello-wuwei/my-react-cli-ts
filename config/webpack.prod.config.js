const merge = require('webpack-merge');
const common = require('./webpack.base.config.js');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');  // 这个插件不被 webpack 官方文档所收录

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const autoprefixer = require("autoprefixer")

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      /* postcss 一种对css编译的工具，类似babel对js的处理，常见的功能如：
        1 . 使用下一代css语法
        2 . 自动补全浏览器前缀
        3 . 自动把px代为转换成rem
        4 . css 代码压缩等等
        postcss 只是一个工具，本身不会对css一顿操作，它通过插件实现功能，autoprefixer 就是其一(glugins中require('autoprefixer')({ browsers: ['last 5 version', '>1%', 'ie >=8'] }))
      */
      /* 遇到后缀为.css的文件，webpack先用css-loader加载器去解析这个文件，遇到“@import”等语句就将相应样式文件引入（所以如果没有css-loader，就没法解析这类语句），最后计算完的css，将会使用style-loader生成一个内容为最终解析完的css代码的style标签，放到head标签里*/
      {
        test: /\.less$/,
        use: [ 
          // 'style-loader', 
          MiniCssExtractPlugin.loader,
          'css-loader',    // webpack识别css文件（webpack只识别js代码，需要转化）
          {
            loader: "postcss-loader",
            options: {
              plugins: () =>
                autoprefixer({
                  overrideBrowserslist: ['last 5 version', '>1%', 'ie >=8']
                })
            }
          },
          'less-loader'  // 转换less文件样式为css
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',   // 为什么不是 '../public/index.html'，我的理解是无论与要用的template是不是在一个目录，都是从根路径开始查找
      template: 'public/index.html',
      inject: 'body',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
    new CleanWebpackPlugin(),
    // style样式是通过style-loader预处理，插入到了head标签内，但是我们平常写样式的时候，一定是通过引入外部css文件进行样式引入的(配合rules中的MiniCssExtractPlugin.loader)，即拆分css文件打包
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css',
      chunkFilename: 'css/[id].[hash].css',
    }),
    // require('autoprefixer')
    // require('autoprefixer')({ overrideBrowserslist: ['last 5 version', '>1%', 'ie >=8'] })
  ],

  optimization: {
    minimizer: [
      new UglifyJsPlugin(), // 我们需要把打包生成的js文件尽可能压缩，以便减少文件体积，更快地被用户加载。
      new OptimizeCssAssetsPlugin({  // 压缩打包出的CSS文件(这段配置也是可以放到 plugins 这个属性下进行配置的)
        assetNameRegExp:/\.css$/g,
        cssProcessor:require("cssnano"),
        cssProcessorPluginOptions:{
          preset:['default', { discardComments: { removeAll:true } }]  // discardComments:去除注释
        },
        canPrint:true  // 插件能够在console中打印信息，默认值是true
      })
    ],
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      cacheGroups: {   // cacheGroups对象，定义了需要被抽离的模块，对拆分的文件进行缓存配置,
        aliIcons: {
          test: "aliIcons",  // test属性是比较关键的一个值，他可以是一个字符串，也可以是正则表达式，还可以是函数。如果定义的是字符串，会匹配入口模块名称，会从其他模块中把包含这个模块的抽离出来
          name: "aliIcons",  // name是抽离后生成的名字，和入口文件模块名称相同，这样抽离出来的新生成的aliIcons模块会覆盖被抽离的aliIcons模块，虽然他们都叫aliIcons
          enforce: true
        },
        vendors: {   // 它的test设置为 /node_modules/ 表示只筛选从node_modules文件夹下引入的模块，所以所有第三方模块才会被拆分出来
          priority: -10,
          test: /node_modules/,
          name: "vendor",
          enforce: true,
        },
      }
    }
  }
});