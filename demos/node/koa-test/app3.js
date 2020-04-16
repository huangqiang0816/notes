const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()

router.get('/', async (ctx, next) => {
  console.log('路由及中间件1');

  ctx.body = "路由页面"
  await next();
})

router.get('/', async (ctx, next) => {
  console.log('路由及中间件2');

  ctx.body = "路由页面1"
})

// 应用级
app.use(async (ctx, next) => {
  console.log('应用及及中间件');
  if (ctx.status == 404) {
    ctx.body = '404页面'
  }
  await next()
})

app.use(router.routes())
app.listen(3000)