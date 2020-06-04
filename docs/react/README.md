### react

- 用于构建用户界面的 JavaScript 库

### 特点

- 虚拟 dom

- 组件化

  > 创建好拥有各自 state(状态) 的组件，再将其组合构成更加复杂的 UI 界面。

- 声明式

  > React 可以轻松创建交互式用户界面。为应用程序中的每个状态设计简单的视图，当数据更改时，React 将高效地更新和正确的渲染组件。

  > 数据一致，输出就一致

- 灵活

  > 能和其它库组合、提高开发效率（redux, react-dom）

- 高效

  > 减少 dom 操作

- 面向对象化

### Vue &React 选择

- react 灵活性更高
- Vue 有丰富的 Api,实现起来简单快速
- vue 上手成本低，学习成本相对低
- 大型复杂项目还是比较推荐 React

#### react-dom

提供 dom 操作的库，将虚拟 dom 转化为真实 dom

支持三个参数 `组件， 根元素，渲染完成回调`

#### jsx

一切皆 js all in js -> html、css、js 都写在 js 中

- 什么是 jsx

  推荐使用

  JavaScript and xml（全称）

  可拓展的标记性语音

- 原理

  将代码转化成 React.createElement()来进行编译处理 **AST 语法解析？**

- 规则

  只有一个顶层元素（根元素）没有 可以使用

  <Fragment>...</Fragment> 或者 <>...</>来占位

  Fragment 元素来包裹 或者使用

- 使用

组件的首字母要大写

不支持 if ..else 只支持表达式

#### 虚拟 dom

批处理 diff

dom 操作成本高、大量的计算

尽可能减少操作 dom、提高渲染效率

- 非 dom 属性及如何使用

  dangerousSetInnerHTML === innerHTML

  防止 xss 攻击

  {\_\_html: '<p>我是插入的 html</p>'}

  ref

  相当于 id 能通过该属性访问到该页面真是 dom 元素

  函数内部使用

  不能再函数组件上使用（即组件是函数式组件时，不能使用 ref 属性）

  key

  提高渲染性能， 唯一标识(不推荐使用循环的 index 作为 key )

#### Props

组件中的数据来源 state 和 props

使用：

props 是只读的 不能修改自身的 props ==> 数据流是单向的

因为组件的复用 违背了组件的设计原则

`子组件向父组件传值 父组件传个方法到子组件 子组件调用方法直接修改父组件`

规则： 字符串 直接引号包裹、非字符串需要 `{}`包裹起来

函数组件中只有 props(无状态组件) hooks 中也可以在函数组件中使用 state

类组件 state 生命周期 有状态 无状态

this 绑定
this
与执行上下文有关
函数调用 严格模式 undefined 非严格模式 window
作为方法调用 谁调用指向谁
call apply bind

四种绑定方式

    1. constructor bind 绑定  **推荐**

2. 直接在 jsx 元素进行绑定 -> 每次都会生成一个函数实例 影响渲染 **不推荐** 
3. 箭头函数 **推荐** 
4. 使用箭头函数 在 jsx 中直接使用 **不推荐** 原因和第 2 点差不多

#### State

props 外部的 可读性 不能直接修改

state 组件内部参数 可以修改

修改直接调用 setState 方法

setState 异步更新 不会立马更新组件、批量延迟更新(提高性能 减少渲染次数) 合并处理

React 控制的事件处理程序（onclick, onchange） 生命周期钩子函数、不会同步更新 state 异步

setState 的同步更新

原生 js react 控制之外的是同步 setTimeout

```jsx
this.setState(state => {
  // 能拿到最新的state 的值
});
```

原则： 

-  让组件减少状态	

> UI 渲染、数据展示、没有复杂的交互 使用props 不使用 state function 函数组件

#### props 和 state 的对比

1. 组件内的数据，js 对象、保存信息、控制组件的状态 UI
2. props  父组件传入 定义组件的接口 this.props (类组件) props（函数式组件）
3. props 只读 。不能直接修改
4. state 组件内部的状态、作用范围  当前组件     私有变量   使用state 来跟踪状态 