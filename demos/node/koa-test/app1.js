const Koa = require('koa');
// 创建Koa 实例
const app = new Koa();

const m1 = async (ctx, next) => {
  console.log(1)
  await next();
  console.log(6);
}
const m2 = async (ctx, next) => {
  console.log(2)
  await next();
  console.log(5);
}
const m3 = async (ctx, next) => {
  console.log(3)
  await next();
  console.log(4);
}
app.use(m1);
app.use(m2);
app.use(m3);

// 洋葱模型  类似于 栈
app.listen(3000);

// http://localhost:3000/about?title=yideng&age=4
// 动态路由
// http://localhost:3000/111
// http://localhost:3000/222