import $ from 'jquery'

function add(...args) {
  return args.reduce((r, i) => r + i, 0);
}

// eslint-disable-next-line
console.log(add(1, 2, 3, 4));

// eslint-disable-next-line
console.log($);
