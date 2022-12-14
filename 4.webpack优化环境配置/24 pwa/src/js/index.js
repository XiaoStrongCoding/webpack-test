import { muti } from './test';
import '../css/index.css';

function add(...args) {
  return args.reduce((r, i) => r + i, 0);
}

// eslint-disable-next-line
console.log(muti(2, 3))
// eslint-disable-next-line
console.log(add(1, 2, 3, 4));

/**
 * 1. eslint不认识 window、navigator全局变量
 *   解决： 需要修改package.json中eslintConfig配置
 *    "env": {
 *      "browser": true // 支持浏览器端全局变量
 *    }
 *  2. 代码必须运行在服务器上
 *     --> node.js
 *     -->
 *        npm i server -g
 *        server -s build 启动服务器，将build目录下所有资源作为静态资源暴露出去
 */
// 注册serviceWorker
// 处理兼容性
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(() => {
        console.log('sw注册成功了～');
      })
      .catch(() => {
        console.log('sw注册失败了～');
      });
  });
}
