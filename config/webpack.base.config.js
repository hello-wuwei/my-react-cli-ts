const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    framework: ['react','react-dom']
  },
  output: {
    filename: 'js/[name].[chunkhash:8].bundle.js' // 给打包出的js文件换个不确定名字：这个操作是为了防止因为浏览器缓存带来的业务代码更新，而页面却没变化的问题，你想想看，假如客户端请求js文件的时候发现名字是一样的，那么它很有可能不发新的数据包，而直接用之前缓存的文件，当然，这和缓存策略有关。
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}