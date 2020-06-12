// 发布订阅者模式
class EventEmitter {
  constructor() {
    this._event = this._event || new Map();
    // 设置监听上线
    this._maxListeners = this._maxListeners || 10;
  }
}

EventEmitter.prototype.emit = function(type, ...args) {
  let handle = this._event.get(type);
  if (Array.isArray(handle)) {
    let Len = handle.length;
    for (let i = 0; i < Len; i++) {
      if (args.length > 0) {
        handle[i].apply(this, args);
      } else {
        handle[i].apply(this);
      }
    }
  } else {
    if (args.length > 0) {
      handle[i].apply(this, args);
    } else {
      handle[i].apply(this);
    }
  }
  return true;
};

EventEmitter.prototype.addListener = function(type, fn) {
  let handle = this._event.get(type);
  if (!handle) {
    this._event.set(type, fn);
  } else if (handle && typeof handle === "function") {
    // 如果之前有一个函数  就添加一个函数
    this._event.set(type, [handle, fn]);
  } else {
    // 直接添加一个函数进去
    handle.push(fn);
  }
};

EventEmitter.prototype.removeListener = function(type, fn) {
  const handle = this._event.get(type);
  this._event.delete(type);
  // 如果存的是函数  就只被监听了一次 直接删除
  if (handle && typeof handle === "function") {
    this._event.delete(type, fn);
  } else {
    let position;
    for (let i = 0; i < handle.length; i++) {
      if (handle[i] === fn) {
        position = i;
      } else {
        position = -1;
      }
    }
    if (handle !== -1) {
      handle.splice(position, 1);
      // 删除后只剩一个函数时  取消数组的保存形式
      if (handle.length === 1) {
        this._event.set(type, handle[0]);
      }
    } else {
      return this;
    }
  }
};

const emitter = new EventEmitter();

emitter.addListener("test", name => {
  console.log(`company: ${name}`);
});

emitter.addListener("test", name => {
  console.log(`company1: ${name}`);
});

emitter.emit("test", "大声喊出来1！");
