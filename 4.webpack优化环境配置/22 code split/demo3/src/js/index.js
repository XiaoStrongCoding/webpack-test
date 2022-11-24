
function add(...args) {
  return args.reduce((r, i) => r + i, 0);
}

// eslint-disable-next-line
console.log(add(1, 2, 3, 4));

/**
 * 通过js代码，让某个文件被单独打包成一个chunk
 * import动态导入语法：能将某个文件单独打包
 */

import(/* webpackChunkName: 'test' */'./test').then(({muti, subtract})=>{
  // eslint-disable-next-line
  console.log(muti(2,3))
}).catch(()=>{
  // eslint-disable-next-line
  console.log('文件加载失败～～')
})
