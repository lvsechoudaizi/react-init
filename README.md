# react-init
******************************************
        react开发环境搭建
******************************************
A.1 运行开发环境：Node.js
A.2 编译工具Babel
A.3 CSS预处理器：Sass/Less
A.4 测试环境
A.5 工程构建工具：Webpack(模块打包器)
    A.5.1 开发环境配置
        Webpack-dev-server(服务器)
        配置加载器loader:
            编译CSS预处理语言的loader(sass loader/less loader)
            打包样式的loader
            babel编译的loader
            react热加载的loader
    A.5.2 线上环境配置
A.6 安装React环境
A.7 编码规范ESLint

******************************************
        react项目搭建（完整过程）
******************************************   
1.创建git项目，获取地址

2.运行npm init 初始化项目，获取package.json文件

3.安装react、react-dom、webpack

  react基本依赖： react、react-dom
  安装打包工具: webpack
  
  在项目根目录下执行下面命令，其中--save的含义是项目上线运行所需的包，即生产环境（--save-dev是开发环境所需的包）。
  npm install react react-dom --save
  npm install webpack --save-dev 
    
  
4.配置项目目录：
根目录project
  |--src
    --index.js
  |--webpack
    --webpack.config.js
  |--static  //静态文件
    --img
  |--dist(项目打包输出目录)
    --bundle.js(该文件是由webpack打包生成)
    --index.html
    
5.编写index.html、index.js、

6.编写webpack.config.js
四个核心概念：入口entry、输出output、模块loader(module)、插件plugin

7.运行前需要安装解析器Babel，否则浏览器不能识别和执行
    安装过程中还需要安装一些代码中用到的编译插件集：如下（需要什么安装什么）
    babel-loader: babel加载器
　　babel-preset-es2015: 支持es2015（ES6）
　　babel-preset-react: jsx 转换成js(React)

8.初运行：
配置package.json:
"run": "webpack --config webpack/webpack.config.js"

运行过程中出现问题：
按照要求安装：webpack.cli、
babel版本问题异常，按照提示更换版本


9.根目录下创建.babelrc文件:该文件是用来设置不同环境的转码插件

10.src目录下创建APP.js
    (React组件化)
 
运行run,查看index.html

*********************************************************************
11.搭建前端服务器：
webpack-dev-server是一个小型的静态文件服务器，为webpack打包的资源文件提供Web服务。并且提供自动刷新和Hot Module Replacement（模块热替换：前端代码变动后无需刷新整个页面，只把变化的部分替换掉）
安装：webpack-dev-server
npm install webpack-dev-server --save-dev　　

修改webpack.config.js(https://www.webpackjs.com)
 module.exports = {
    //配置服务器
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    }
 }
 执行："start": "webpack-dev-server --config webpack/webpack.config.js"
 
 **浏览器报错：Cannot GET**
    没有找到默认的文件路径index.html
 contentBase: path.resolve(__dirname, '../dist'), //默认会以根文件夹提供本地服务器，这里指定文件夹
 
 
 12.使用插件实现自动引入，免去手工配置dist文件夹和目录下的文件，安装html-webpack-plugin
安装：
    npm install html-webpack-plugin --save-dev
删除：
    dist目录
新建：
    在根目录下新建一个模板index.html
    
13.优化webpack.config.js
  devtool: 'cheap-module-eval-source-map', //方便浏览器断点调试

14.实现热更新：在不刷新浏览器的情况下实现对应用的更新
修改：
    devServer: {
        hot: true,  //启用 webpack 的模块热替换特性：
        inline: true,
        ...
    }
替换运行："start": "webpack-dev-server --config webpack/webpack.config.js --hot"

15.运行发现，填写表单时更新代码，之前的填写内容不见了，没能实现真正的热更新
    **解决热更新组件状态保存问题**
安装：    
    npm install react-hot-loader --save-dev
    npm install babel-polyfill --save
注意：配置react-hot-loader:
    (每个版本的使用方法不一致，可查看具体用法：https://www.npmjs.com/package/react-hot-loader)
    

16.配置编码规范-----ESLint代码检测工具
    （https://cn.eslint.org/docs/rules/）
    统一的编码规范可以大大降低阅读代码的成本
安装必要的包：
    npm install eslint eslint-loader --save-dev
    npm install babel-eslint --save-dev  //解释器
    npm install eslint-config-airbnb --save-dev //别人定义好的编码规则，安装插件Airbnb
    eslint-config-airbnb需要下面3个插件的支持：
    npm install eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react --save-dev
    （安装过程中的警告提示安装其他依赖包的话，进行手动安装）
    
新建：根目录下新建配置文件.eslintrc
    {
        "env":一个环境定义了一组预定义的全局变量
        "parserOptions":指定你想要支持的 JavaScript 语言选项
        "parser":指定解析器
        "globals":配置全局变量
        "plugins":第三方插件
        "rules":规则设置
                "off" 或 0 - 关闭规则
                "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
                "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
         "settings":配置文件添加共享设置
         "extends":从基础配置中继承已启用的规则
        .....
    }
项目配置，完成

17.配置编辑器规范 --EditorConfig
新建：根目录下新建配置文件.editorconfig

18.创建.eslintignore/.gitignore忽视文件配置

19.目前为止，项目环境已经全部搭建成功