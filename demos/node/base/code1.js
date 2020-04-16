//  什么是node.js

// js 的解释器 node.js 运行在服务器的 使用的是V8引擎  
// node.js 是js 的运行环境

// 为什么

// {
//   function test() {}
//   test = 123
//   function test() {}
//   test = 234
// }

// console.log(test);

var length = 10;
function fn() {
    console.log(this.length);
}
 
var obj = {
  length: 5,
  method: function(fn) {
    fn();
    arguments[0]();
  }
};
 
obj.method(fn, 1)
