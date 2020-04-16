const Koa = require('koa');
const Router = require('koa-router')
// 创建Koa 实例
const app = new Koa();
// 创建 router 实例
const router = new Router()

// 配置路由
router.get('/:id', async ctx => {
  // ctx context request response
  // query queryString
  //  返回的是对象的形式
  console.log(ctx.params.id)
  //  返回的是支付串拼接 
  // console.log(ctx.querystring)
  ctx.body = '我是主页面'
})
router.get('/about', async ctx => {
  console.log(ctx.query)
  console.log(ctx.querystring)
  // ctx context request response
  ctx.body = '我是about'
})

app.use(router.routes())
  // 官方推荐
  .use(router.allowedMethods())

app.listen(3000);

// http://localhost:3000/about?title=yideng&age=4
// 动态路由
// http://localhost:3000/111
// http://localhost:3000/222
