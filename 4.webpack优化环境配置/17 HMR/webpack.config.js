/**
 * HMR: hot module replacement 热模块替换 / 模块热替换
 *  作用： 一个模块发生变化，只会重新打包这一模块（而不是打包所有模块）
 *      极大提升构建速度
 *      样式文件：可以使用HMR功能： 因为style-loader内部实现了～
 *      js文件： 默认不能使用HMR功能 --> 需要修改js代码，添加支持HMR功能的代码
 *          注意：HMR功能对js的处理，只能处理非入口js文件的其他文件。
 *      html文件： 默认不能使用HMR功能，同时会导致问题：html文件不能热更新了～～（不用做HMR功能）
 *          解决：修改entry入口，将html文件引入
 */

const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: ['./src/js/index.js', './src/index.html'],
    output: {
        // 只对应于入口文件
        filename: 'js/built.js',
        // 定下打包后的根路径
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                // 处理样式中的图片
                test: /\.(jpg|png|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 8 * 1024,
                    name: '[hash:10].[ext]',
                    esModule: false,
                    outputPath: 'imgs'
                }
            },
            {
                // 处理html中的图片
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                // 处理其他资源
                exclude: /\.(css|js|html|less|jpg|png|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[hash:10].[ext]',
                    outputPath: 'media'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development',
    devServer: {
        contentBase: resolve(__dirname, 'build'),
        compress: true,
        port: 5056,
        open: true,
        // 打开 HMR(热更新)
        // 修改webpack配置后要重新启动
        hot: true
    }
}