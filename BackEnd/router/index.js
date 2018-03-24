const router = require('koa-router')()
const user = require('./routes/user')
const article = require('./routes/article')
const project = require('./routes/project')

module.exports = app => {
  article(router)
  user(router)
  project(router)
  app.use(router.routes())
    .use(router.allowedMethods())
}