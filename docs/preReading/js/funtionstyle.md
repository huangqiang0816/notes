# 函数式编程

## 范畴论

1. 范畴论的概念
   > 范畴就是使⽤箭头连接的物体。"（In mathematics, a category is an algebraic structure thatcomprises "objects" that are linked by "arrows". ）
2. 数学模型
   既然"范畴"是满⾜某种变形关系的所有对象，就可以总结出它的数学模型。

   > - 所有成员是⼀个集合
   > - 变形关系是函数

   也就是说，范畴论是集合论更上层的抽象，简单的理解就是"集合 + 函数"。
   理论上通过函数，就可以从范畴的⼀个成员，算出其他所有成员。

3. 范畴与容器
   我们可以把"范畴"想象成是⼀个容器，⾥⾯包含两样东⻄。

   > - 值（value）
   > - 值的变形关系，也就是函数。

   下⾯我们使⽤代码，定义⼀个简单的范畴。

   ```javascript
   class Category {
     constructor(val) {
       this.val = val;
     }
     addOne(x) {
       return x + 1;
     }
   }
   ```

   上⾯代码中， Category 是⼀个类，也是⼀个容器，⾥⾯包含⼀个值（ this.val ）和⼀种变形关系（ addOne ）。你可能已经看出来了，这⾥的范畴，就是所有彼此之间相差 1 的数字。
   注意，本⽂后⾯的部分，凡是提到"容器"的地⽅，全部都是指"范畴"。

4. 范畴论与函数式编程的关系
   范畴论使⽤函数，表达范畴之间的关系。
   伴随着范畴论的发展，就发展出⼀整套函数的运算⽅法。这套⽅法起初只⽤于数学运算，后来有⼈将它
   在计算机上实现了，就变成了今天的"函数式编程"。
   **本质上，函数式编程只是范畴论的运算⽅法，跟数理逻辑、微积分、⾏列式是同⼀类东⻄，都是数学⽅法，只是碰巧它能⽤来写程序。**
   所以，你明⽩了吗，为什么函数式编程要求函数必须是纯的，不能有副作⽤？因为它是⼀种数学运算，
   原始⽬的就是求值，不做其他事情，否则就⽆法满⾜函数运算法则了。
   总之，在函数式编程中，函数就是⼀个管道（pipe）。这头进去⼀个值，那头就会出来⼀个新的值，没
   有其他作⽤。

## 函数的合成与柯⾥化

  函数式编程有两个最基本的运算：合成和柯⾥化。

   1. 函数的合成
   如果一个值要经过多个函数,才能变成另外一个值,就可以把所有的中间步骤合并成一个函数,这就叫做"函数的合成"(compose).
   合成两个函数的简单代码如下。

  ```javascript
  const cpmpose = function(f, g) {
    return function(x) {
      return f(g(x));
    };
  };
  ```

  函数的合成还必须满⾜结合律。

  > compose(f, compose(g, h))
  > // 等同于
  > compose(compose(f, g), h)
  > // 等同于
  > compose(f, g, h)

  合成也是函数必须是纯的⼀个原因。因为⼀个不纯的函数，怎么跟其他函数合成？怎么保证各种合成以后，它会达到预期的⾏为？
  前⾯说过，函数就像数据的管道（pipe）。那么，函数合成就是将这些管道连了起来，让数据⼀⼝⽓从
  多个管道中穿过。

   2. 柯⾥化

  f(x) 和 g(x) 合成为 f(g(x)) ，有⼀个隐藏的前提，就是 f 和 g 都只能接受⼀个参数。如果可以接受
  多个参数，⽐如 f(x, y) 和 g(a, b, c) ，函数合成就⾮常麻烦。

  **这时就需要函数柯⾥化了。所谓"柯⾥化"，就是把⼀个多参数的函数，转化为单参数函数。**

  ```javascript
  // 柯⾥化之前
  function addd(x, y) {
    return x + y
  }
  add(1, 2) // 3
  // 柯⾥化之后
  function addX(y) {
    return function (x) {
      return x + y;
    };
  }
  addX(2)(1) // 3
  ```

  有了柯⾥化以后，我们就能做到，所有函数只接受⼀个参数。后⽂的内容除⾮另有说明，都默认函数只有⼀个参数，就是所要处理的那个值。

## 函⼦

  函数不仅可以⽤于同⼀个范畴之中值的转换，还可以⽤于将⼀个范畴转成另⼀个范畴。这就涉及到了函⼦（Functor）。
  
  1. 函⼦的概念

  函⼦是函数式编程⾥⾯最重要的数据类型，也是基本的运算单位和功能单位。
  
  它⾸先是⼀种范畴，也就是说，是⼀个容器，包含了值和变形关系。**⽐较特殊的是，它的变形关系可以依次作⽤于每⼀个值，将当前容器变形成另⼀个容器**
