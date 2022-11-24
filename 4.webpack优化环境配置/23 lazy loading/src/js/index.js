console.log('index文件被加载了～')
function add(...args) {
  return args.reduce((r, i) => r + i, 0);
}

// eslint-disable-next-line
console.log(add(1, 2, 3, 4));

document.getElementById('btn').onclick = function(){
  // 懒加载～：当文件需要使用时加载～
  // 预加载 prefetch: 会使用之前，提前加载js文件
  // 正常加载可以认为并行加载（同一时间加载多个文件）
  // 预加载 prefetch: 等其他资源加载完毕，浏览器空闲了，再偷偷加载资源(版本问题)

  import(/* webpackChunkName: 'test', webpackPrefetch: true */'./test').then(({muti})=>{
    // eslint-disable-next-line
    console.log(muti(2, 3))
  })
}


