proxy方法

-  在vue中能通过this.xx 访问到 data  里边的属性。怎么实现的

  data通过proxy 实现 

  ```javascript
  export function proxy (target: Object, sourceKey: string, key: string) { 
      // 通过this 能访问到data 里边的属性
    sharedPropertyDefinition.get = function proxyGetter () {
      return this[sourceKey][key]
    }
    sharedPropertyDefinition.set = function proxySetter (val) {
      this[sourceKey][key] = val
    }
      // 给vue 的实例上添加参数， get访问到的是 this._data上边的属性
    Object.defineProperty(target, key, sharedPropertyDefinition)
  }
  ```

  

 computed、methods 、props 也是一样的实现

