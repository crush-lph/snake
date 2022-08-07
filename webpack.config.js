const path = require('path')

const HTMLWebpackPlugin = require('html-webpack-plugin')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// webpack 中的配置信息都应该卸载module.exports中
module.exports = {
  mode: 'development',
  //指定入口文件
  entry: './src/index.ts',
  //指定打包文件输出位置
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // 不适用箭头函数
    environment: {
      arrowFunction: false
    }
  },
  // webpack 打包时要使用的模块
  module: {
    //指定loader规则
    rules: [
      {
        //指定规则生效文件
        test: /\.ts$/,
        // 加载器从后往前执行
        use: [
          {
            loader: 'babel-loader',
            options: {
              // 设置预定义的环境
              presets: [
                [
                  "@babel/preset-env",
                  // 配置信息
                  {
                    // 要兼容的浏览器
                    targets: {
                      "chrome": "58",
                      "ie": "11"
                    },
                    // 指定corejs的版本
                    corejs: '3',
                    // 使用corejs的方式  usage  按需加载
                    useBuiltIns: 'usage'
                  }
                ]
              ]
            }
          },
          'ts-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader', options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      browsers: 'last 2 versions'
                    }
                  ]
                ]
              }
            }
          },
          'less-loader'
        ]
      }
    ]
  },
  // 配置webpack插件
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      //按照模板生成html文件
      template: './src/index.html'
    }),
  ],
  // 用来设置引用模块
  resolve: {
    extensions: ['.ts', '.js']
  }
}