# JavaScript 基础测试 B 卷

-> 对象代码放在 `demos/js-b` 中

## 1. ⼿写⼀个 new 操作符

- **执行 new 会发生些什么**

1. 创建一个空的简单 JavaScript 对象（即{}）
2. 链接该对象（即设置该对象的构造函数）到另一个对象
3. 将步骤 1 新创建的对象作为 this 的上下文
4. 如果该函数没有返回对象、则返回 this

- **按照上边的步骤来一步步实现**
  由于 new 是关键字，我们只能去声明一个函数去实现 new 的功能，首先实现上面的几个特性

  ```javascript
  let newFunction = function() {
    // 先拿到函数
    let construct = Array.prototype.shift.call(arguments)
    // 将函数原型上的属性绑定到返回的新函数的 原型上
    let res = Object.create(construct.prototype);
    // 绑定 this 的指向  -> 函数的原型对象上
    let curRes = construct.apply(res, arguments)
    // 返回函数或者执行return 返回的新对象
    return curRes instanceof Object ? curRes : res
  };
  ```

- **2. ⼿写⼀个 JSON.stringify 和 JSON.parse**
- **3. ⼿写⼀个 call 或 apply**
- **4. ⼿写⼀个 Function.bind**
- **5.⼿写防抖(Debouncing)和节流(Throttling)**
- **6. ⼿写⼀个 JS 深拷⻉（由浅⼊深多种解法）**
- **7. ⼿写⼀个 instanceOf 原理 操作符**
- **8. ⼿写⼀个 map 和 reduce**
- **9. ⼿写实现拖拽**
- **10. 使⽤ setTimeout 模拟 setInterval**
- **11. ⼿写实现 Object.create 的基本原理**
