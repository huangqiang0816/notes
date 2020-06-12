// this.$set()
// 返回 设置的值传入的val
// 注意对象不能是 Vue 实例，或者 Vue 实例的根数据对象

function isPrimitive(value) {
  return (
    typeof value === "string" ||
    typeof value === "number" ||
    // $flow-disable-line
    typeof value === "symbol" ||
    typeof value === "boolean"
  );
}

function set(target, key, val) {
  // 判断数据是不是基本类型
  if (isPrimitive(target) || typeof target === "undefined") {
    console.log("数据传入有误");
  }
  // 数组
  // isValidArrayIndex(key) 判断传入的key 是不是数组下标 整数 >=0
  if (Array.isArray(target)) {
    target.length = Math.max(target.length, key);
    // 直接触发数组的更新方式
    target.splice(key, 1, val);
    return val;
  }

  // 对象判断是不是原来的属性  并且不是原型链上的属性 直接赋值  getter更新
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val;
  }
  // 拿到属于响应式的判断依据

  const ob = target.__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    // 判断是不是Vue实例的 是就报错
    process.env.NODE_ENV !== "production" &&
      warn(
        "Avoid adding reactive properties to a Vue instance or its root $data " +
          "at runtime - declare it upfront in the data option."
      );
    return val;
  }
  // 如果target 不是响应式 那就不设置成响应式
  if (!ob) {
    target[key] = val;
    return val;
  }

  // 先响应式的处理
  defineReactive(ob.value, key, val);
  // 再手动更新
  ob.dep.notify();
  return val;
}
