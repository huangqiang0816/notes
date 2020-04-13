//  引入Event模块并创建eventsEmitter对象

let events = require("events");

let eventEmitter = new events.EventEmitter();

// 绑定事件处理函数
var connectHandler = function connected() {
  console.log("connected被调用！");
};

eventEmitter.on("connection", connectHandler);
//  触发事件

setInterval(() => {
  eventEmitter.emit("connection");
}, 1000);

console.log("程序执行完毕");
