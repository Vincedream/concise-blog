const router = require('koa-router')()
const testapi = require('./routes/testapi')
const user = require('./routes/user')

module.exports = app => {
  user(router)
  testapi(router)
  app.use(router.routes())
    .use(router.allowedMethods())
}