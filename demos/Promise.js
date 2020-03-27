// 判断是否是函数
let isFunction = source => Object.prototype.toString.call(source) === "[object Function]";

function promise(fn) {
  // 
  let promise = this,
    value = null,
    promise._resolves = [],
    promise._rejects = [],
    promise._status = 'PENDING'

  this.then = function (onFulilled) {
    return new promise(function (resolve) {
      function handle(value) {
        var ret = isFunction(onFulilled) && onFulilled(value) || value
        if(ret && ret['then'] === 'function'){
          ret.then(function(value){
            resolve(value)
          })
        } else {
          resolve(value)
        }
      }
      if (promise._status === 'PENDING') {
        promise._resolves.push(handle)
      } else if (promise._status === 'FULFILLED') {
        handle(value)
      }
    })
  }

  function resolve(value) {
    setTimeout(function () {
      promise._status = 'FULFILLED'
      promise._resolves.forEach(function (callback) {
        value = callback(value)
      })
    }, 0)
  }

  fn(resolve)
}