/**
 * webpack 入口文件
 * 1.运行指令
 *  开发环境：webpack ./src/index.js -o ./build/built.js --mode=development
 *  生产环境：webpack ./src/index.js -o ./build/built.js --mode=production
 * 
 * 2.结论
 *  1. webpack能处理js/json资源，不能处理css/img等其他资源
 *  2. 生产环境和开发环境将ES6模块编译成浏览器能识别的模块化～
 *  3. 生产环境比开发环境多一个压缩js代码。webpack5并在node环境中运行代码🤔
 */

import data from './data.json'
// import './index.css'

console.log(data)

function add (x, y){
    return x+y
}

console.log(add(2, 3))