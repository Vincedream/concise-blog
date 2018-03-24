const router = require('koa-router')()
const user = require('./routes/user')
const article = require('./routes/article')

module.exports = app => {
  article(router)
  user(router)
  app.use(router.routes())
    .use(router.allowedMethods())
}