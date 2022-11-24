
const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    // 单入口（对应单页面应用）
    // entry: './src/js/index.js',
    entry: {
        // 多入口：有一个入口，对应输出一个bundle
        main: './src/js/index.js',
        test: './src/js/test.js'
    },
    output: {
        // [name]: 取入口名
        filename: 'js/[name].[contenthash:10].js',
        path: resolve(__dirname, 'build')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        })
    ],
    mode: 'production'
}