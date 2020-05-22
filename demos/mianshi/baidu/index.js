["1", "3", "10"].map(parseInt);

// ["1", "3", "10"].map((it, index, arr) => {

// })

// parseInt("1", 0) // 默认十进制
// parseInt("3", 1) // 没有1进制  会报错
// parseInt("10", 2) // 二进制

// => [1, NaN, 2]


var number = 10;

function fn() {
    console.log(this.number);
}
var obj = {
    number: 2,
    show: function (fn) {
        this.number = 3;
        fn();
        arguments[0]();
    }
};
obj.show(fn);
// fn 没有执行环境指向全局 => 10
// arguments[0] -> fn
// arguments  的number  undefined


3.
/* 请写出 inner 的实际高度。
<style>
  .outer {
    width: 200px;
    height: 100px;
  }
  .inner {
    width: 60px;
    height: 60px;
    padding-top: 20%;
  }
</style>
<div class="outer"><div class="inner"></div></div>
 */
// padding-top：20% 的百分比是基于父元素的宽度来定的
