const router = require('koa-router')()
const testapi = require('./routes/testapi')
const user = require('./routes/user')
const article = require('./routes/article')

module.exports = app => {
  article(router)
  user(router)
  testapi(router)
  app.use(router.routes())
    .use(router.allowedMethods())
}