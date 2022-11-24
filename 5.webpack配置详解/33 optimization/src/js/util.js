
console.log('欢迎来到 公共方法')

export function add (x,y){
    return x + y
}

export function subtract(x,y){
    return x - y
}

import('./other').then(({multi})=>{
    return console.log(multi(2,3))
})