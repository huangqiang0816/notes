vm.render

```javascript
vnode = render.call(vm._renderProxy, vm.$createElement)	
```

- vm._renderProxy 参数   vm 实例、并在实例上对参数进行判断-> 没有的属性报错

- vm.$createElement 将render函数处理成vnode 

  接下来对vnode 进行校验 如果返回的是一个数组  报错提示 

  并将当前的vnode 和父组件创建依赖关系

  ```javascript
  vnode.parent = _parentVnode
  ```

  