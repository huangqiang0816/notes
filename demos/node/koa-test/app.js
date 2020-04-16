const Koa = require('koa');
const Router = require('koa-router')
const views = require('koa-views')
const bodyparser = require('koa-bodyparser')
const static = require('koa-static')

// 创建Koa 实例
const app = new Koa();
app.use(bodyparser())
app.use(static(__dirname + '/static'))
// 创建 router 实例
const router = new Router()

app.use(
  views('page', {
    map: {
      html: 'ejs'
    }
  })
)

router.post('/save', async (ctx, next) => {
  let data = ctx.request.body
  ctx.body = data
})
router.get('/', async (ctx, next) => {
  console.log('路由及中间件1');
  const text = '一灯学堂'
  await ctx.render('index', {
    text
  });
})
router.get('/login', async (ctx, next) => {
  console.log('路由及中间件1');
  await ctx.render('login');
})


// 应用级 第一个公告信息
app.use(async (ctx, next) => {
  ctx.state.CommonData = '我是公共数据，每个页面都能用'
  console.log('应用及及中间件');
  if (ctx.status == 404) {
    ctx.body = '404页面'
  }
  await next()
})

app.use(router.routes())
  // 官方推荐
  .use(router.allowedMethods())

app.listen(3000);

// http://localhost:3000/about?title=yideng&age=4
// 动态路由
// http://localhost:3000/111
// http://localhost:3000/222