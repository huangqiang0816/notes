- 首先判断el属性 ->不能是html或者body 标签

- 判断 render 函数？template ? 没有template 转化成template-> 通过  compileToFunctions（模板编译转化成render 函数）

- 调用 lifecycle 的**mountComponent** 方法

  callHook(*vm*, 'beforeMount') 执行beforeMount 钩子函数

  ```javascript
  updateComponent = () => {
      // vm._render() 生产Vnode 并返回
      vm._update(vm._render(), hydrating)
  }
  ```

  vm.render()  生成vNode

  生成渲染Watcher

  watcher 的 getter => updateComponent

  ```javascript
   new Watcher(vm, updateComponent, noop, {
      before () {
        if (vm._isMounted && !vm._isDestroyed) {
          callHook(vm, 'beforeUpdate')
        }
      }
    }, true /* isRenderWatcher */) // 生产渲染Watcher
  ```

  在 Watcher 生成时调用 -> ```this.getter.call(vm, vm)```

  执行一次渲染  vm._update(vm._render(), hydrating)