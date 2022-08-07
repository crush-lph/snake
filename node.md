# 初始化项目

使用npm init -y 生成一个package.json文件用于管理项目

# 安装开发依赖

`npm i -D xxx`

webpack
webpack-cli  webpack 命令行工具
typescript  ts核心包
ts-loader   ts解析器
html-webpack-plugin

webpack-dev-server
@babel/core
@babel/preset-env
babel-loader
core-js

# css解析器

npm i -D less less-loader css-loader style-loader

在webpack的

```js
 module: {
   //指定loader规则
    rules: [
      {
        test: /\.less$/,
        //  解析器的执行顺序是从后往前 
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      }
    ]
  },
```
