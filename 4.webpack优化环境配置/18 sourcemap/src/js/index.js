import '../css/iconfont.css'
import '../css/index.less'
import print from './print'

function add (a,b){
    return a + b
}

console.log(add(2, 3))
console.log(add(1, 2))

print()

if(module.hot){
    module.hot.accept('./print.js', function(){
        // 方法会监听print.js文件变化， 一旦发生变化，其他模块不会重新打包构建
        // 会执行后面的回调函数
        print()
    })
}