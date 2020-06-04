#### 受控组件和非受控组件 （相对于表单元素）

- 受控组件

​ 依赖状态、默认值实时映射到状态 state

​ 必须使用 onChange

​ 双向绑定

​ 设置默认值 在 state 中声明

​ 优点：

​ 非常符合 react 的数据流

​ 修改使用更加方便 完全不需要获取 dom

- 非受控组件

  不受控制 获取 dom 操作 dom ref

  很容易与第三方组件结合

  初始值用 defaultValue 来声明

- 总结 使用 value 时必须使用 onchange,不然就使用 ref 获取值

​

#### 事件和 this

- react 中的事件

  ​ 直接写在 jsx 中

  ​ on+EventType,onClick,onBlur ...

- 事件监听 this

  1.  constructor bind 推荐
  2.  箭头函数 推荐
  3.  在 jsx 中直接 bind 不推荐
  4.  在 jsx 中使用箭头函数

- 事件传参

  bind

  ```JSX
  ... handleBtnClick(params, event) {} ...

  <button onClick={this.handleBtnClick.bind(this,'传递的参数123')}>传递参数</button>
  ```

  箭头函数

  ```jsx
  ... handleBtnClick(event, params) {} ...

  <button onClick={(e)=>{this.handleBtnClick(e,'传递的参数456')}}>传递参数</button>
  ```
