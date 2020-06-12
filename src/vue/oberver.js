// 数据响应式的代码
function defineReactive(obj, key, value) {
  const property = Object.getOwnPropertyDescriptor(obj, key);
  // 不能修改的数据不做响应式处理
  if (property && property.configurable === false) {
    return;
  }

  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function defineGet() {
      console.log(`Get key: ${key} value: ${value}`);
      return value;
    },
    set: function defineSet(newVal) {
      console.log(`Set key: ${key} value: ${value}`);
      value = newVal;
    }
  });
}

function Observer(data) {
  // 实例挂载到 __ob__属性上
  def(data, "__ob__", this);
  // 重写数组的方法
  if (Array.isArray(data)) {
    protoAugment(data, arrayMethods);
    this.observeArray(data);
  } else {
    this.walk(data);
  }
}

Observer.prototype.walk = function(data) {
  for (const [key, value] of Object.entries(data)) {
    defineReactive(data, key, value);
  }
};

Observer.prototype.observeArray = function(items) {
  for (let i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

function protoAugment(target, src) {
  target.__proto__ = src;
}

const arrayProto = Array.prototype;

const arrayMethods = Object.create(arrayProto);

const methodsToPatch = [
  "push",
  "pop",
  "shift",
  "unshift",
  "splice",
  "sort",
  "reverse"
];

function def(obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

methodsToPatch.forEach(function(method) {
  // cache original method
  const original = arrayProto[method];
  def(arrayMethods, method, function mutator(...args) {
    const result = original.apply(this, args);
    const ob = this.__ob__
    let inserted;
    switch (method) {
      case "push":
      case "unshift":
        inserted = args;
        break;
      case "splice":
        inserted = args.slice(2);
        break;
    }
    if (inserted) ob.observeArray(inserted)
    console.log("数据更新了");
    return result;
  });
});

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function observe(value) {
  if(!isObject(value)){ // 非对象的值不做处理
    return
  }
  let ob;
  if (value.__ob__ && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else {
    ob = new Observer(value);
  }
}
let a = [1, 2, 3, 4, 5];
observe(a);

