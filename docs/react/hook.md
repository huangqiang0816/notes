#### 什么是 React Hook 16.8+ 以上的特性

- 16.8

  是函数组件中 使用 state

- hook 钩子

  使我们在非 class 的情况下、可以使用更多的 react 特性

  完全可选

- 优势

  代码更加简洁

  上手更加简单

  react 上手难

  1. 生命周期不熟练
  2. 性能优化问题
  3. redux 状态管理 概念非常多 难以理解 中文文档.
  4. 高阶组件 必须掌握、似懂非懂
  5. 优秀的解决方案、都在 react 社区

  Hook 学习成本降低

  1. 生命周期可以不用学

  2. 高阶组件不用学 3. reducx 不再是必须品，mobx 上手非常容易

  开发体验好

  1. 可以使用函数组件维护组件状态

- 单向数据流

  从上到下依次传递 state/props 组件重新渲染（父组件变化-> 子组件全部渲染）

  class render

  function 整个函数重新执行

  函数组件

```jsx
function Component() {
  // 返回 jsx 结构
  return <div></div>;
}
```

 hook 函数式组件 有状态的函数式组件 state useState

#### Hook Api

- useState

   每次渲染、函数都会重新执行. 函数执行完毕、所有的内存都会释放掉 

  （为了解决释放后组件）

  在函数内部创建一个当前函数组件的状态，提供一个修改状态的方法

  useState[10] => [count, setCount]

- useEffect

  总会执行一些副作用操作，函数式组件、纯函数、props， 固定的输入总会得到固定的输出

  什么副作用？

  ​	只想渲染一个dom -> dom渲染完了，还执行一段逻辑（副作用）

  ​	没有发生在数据视图转换过程中的逻辑	

  ​	ajax 访问原生dom

  ​	需要清楚的 不需要清楚的

  ​	 hook之前  副作用之前不被允许（会引起页面的非一致性）

  ​	useEffect componetDidMount 、 componentDidUpdate  生命周期 合并的api

  ​	useEffect (fn)  函数组件在渲染到屏幕之后才会执行   返回 一个清楚副作用的函数  不返回

  ​		一般是不需要同步的，需要同步 uselayoutEffect

- useContext

  爷孙组件的传值   父->子->孙

  useContext 使用 context 的能力

  顶层的组件

- useReducer 

  redux

  useState 内部就是靠useReducer实现的

  useState 的替代方案（state, action）= > newState

  接受三个参数 state，配置的dispatch

  评估好当前应用场景

- useRef

  16 Object.createRef 创建ref 方法