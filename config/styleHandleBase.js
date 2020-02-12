const cssLoader = {     // 'css-loader',    // webpack识别css文件（webpack只识别js代码，需要转化）
  loader: 'css-loader',
  options: {
    modules: {                 // 开启module模式
      localIdentName: "[name]__[local]___[hash:base64:5]",
    },
    sourceMap: true      
  }
}

const lessLoader = {    // 'less-loader'  // 转换less文件样式为css
  loader: 'less-loader',
  options:  {
    javascriptEnabled: true,  // 解决报错：Module build failed (from ./node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js) 
  }
}

const nodeModulesStyleHandle = {     // 单独处理node_modules中antd的样式
  test: /\.(less|css)$/,
  use: [
    'style-loader',
    'css-loader',
    {
      loader: 'less-loader',
      options:  {
        javascriptEnabled: true,  // 解决报错：Module build failed (from ./node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js)  
      }
    }
  ],
  exclude:/src/,
}

module.exports = {
  cssLoader,
  lessLoader,
  nodeModulesStyleHandle
}