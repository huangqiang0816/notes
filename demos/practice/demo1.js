// 回调函数
//  阻塞的代码
/*
const fs = require('fs');

let data = fs.readFileSync('data.txt');

console.log(data.toString());
console.log('www');
*/

// 非阻塞
/*
const fs = require("fs");

fs.readFile("data.txt", function(err, data) {
  if (err) {
    return console.log("读取错误");
  } else {
    console.log(data.toString());
  }
});
console.log("www");
*/

// 事件驱动
//  单线程  使用异步ll