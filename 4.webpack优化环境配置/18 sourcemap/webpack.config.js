

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
        hot: true
    },
    devtool: 'source-map'
}

/**
 * source-map: 一种 提供源代码到构建后代码映射 技术（如果构建后代码出错了，通过映射可以追踪源代码错误）
 *  [inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map
 *  source-map: 外部
 *     错误代码准确信息 和 源代码的错误位置
 *  inline-source-map: 内联
 *     只生成一个内联source-map
 *     错误代码准确信息 和 源代码的错误位置
 *  eval-source-map: 内联
 *     每一个文件都生成对应的source-map, 都在eval
 *     错误代码准确信息 和 源代码的错误位置
 *  hidden-source-map: 外部
 *     错误代码错误原因，但没有错误位置
 *     不能追踪到源代码错误，只能提示到构建后代码的错误位置
 *  nosources-source-map: 外部
 *     错误代码准确信息，但是没有任何源代码信息
 *  cheap-source-map: 外部
 *     错误代码准确信息 和 源代码的错误位置
 *     只能精确到行
 *  cheap-module-source-map: 外部
 *     错误代码准确信息 和 源代码的错误位置
 *     只能精确到行
 *     module会将loader的source map加入
 *  内联 和 外部的区别： 1. 外部生成文件，内联没有 2. 内联构建速度更快
 *  
 *  开发环境：速度快，调试更友好
 *     速度快（eval>inline>cheap>...）
 *       eval-cheap-source-map
 *       eval-source-map
 *     调试更友好
 *       source-map
 *       cheap-module-source-map
 *       cheap-source-map
 * 
 *  --> eval-source-map / eval-cheap-module-source-map
 * 
 *  
 *  生产环境：源代码要不要隐藏？调试要不要更友好
 *  内联会让代码体积变大，所以在生产环境不用内联
 *  nosources-source-map 全部隐藏
 *  hidden-source-map 只隐藏源代码，会提示构建后代码错误信息
 * 
 *  --> source-map / cheap-module-source-map
 */