
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
    /**
     * 1. 可以将node_modules中代码单独打包一个chunk最终输出
     * 2. 自动分析多入口chunk中，有没有公共的文件。如果有会打包成单独一个chunk
     */
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    mode: 'production'
}