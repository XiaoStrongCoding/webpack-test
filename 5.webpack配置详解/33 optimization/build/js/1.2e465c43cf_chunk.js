(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/js/util.js":
/*!************************!*\
  !*** ./src/js/util.js ***!
  \************************/
/*! exports provided: add, subtract */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"add\", function() { return add; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"subtract\", function() { return subtract; });\n\nconsole.log('欢迎来到 公共方法')\n\nfunction add (x,y){\n    return x + y\n}\n\nfunction subtract(x,y){\n    return x - y\n}\n\n__webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./other */ \"./src/js/other.js\")).then(({multi})=>{\n    return console.log(multi(2,3))\n})\n\n//# sourceURL=webpack:///./src/js/util.js?");

/***/ })

}]);