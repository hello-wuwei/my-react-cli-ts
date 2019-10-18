## webpack-react
My react-cli

## node版本
v12.12.0

## 参考文章
https://juejin.im/post/5da5748851882555a8430641

## 详情
该项目通过webpack自定义配置react项目，打包入口文件，输出hash文件，避免请求资源缓存

使用Babel和webpack来转译JavaScript文件，@babel/preset-react转译react的JSX，@babel/preset-env转译ES2015+的语法，@babel/core为babel的核心模块

使用html-webpack-plugin插件来将public的index.html应该自动编译到dist目录

最新打包编译的文件，就需要先清除dist目录（clean-webpack-plugin），再重新生成

optimization.splitChunks分割代码，减小文件体积

uglifyjs-webpack-plugin压缩代码体积

webpack-dev-server提供了devServer开发环境，支持热更新

wbpack只能编译js文件，css文件是无法被识别并编译的，我们需要loader加载器来进行预处理，安装style-loader 和 css-loader（遇到后缀为.css的文件，webpack先用css-loader加载器去解析这个文件，遇到“@import”等语句就将相应样式文件引入（所以如果没有css-loader，就没法解析这类语句），最后计算完的css，将会使用style-loader生成一个内容为最终解析完的css代码的style标签，放到head标签里

mini-css-extract-plugin通过引入外部css文件进行样式引入

optimize-css-assets-webpack-plugin用于将dist目录下打包出的css文件代码压缩

less less-loader：webpack也同样无法理解这种编写方式，那就需要配置loader做预处理，将其转换为css

postcss postcss-loader配合autoprefixer在不同版本环境下补全css样式前缀

file-loader url-loader中：file-loader 可以对图片文件进行打包，但是 url-loader 可以实现 file-loader 的所有功能，且能在图片大小限制范围内打包成base64图片插入到js文件中（包含添加字体图标）

source-map开启源代码错误定位
