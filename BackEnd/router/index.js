const router = require('koa-router')()
const user = require('./routes/user')
const article = require('./routes/article')
const project = require('./routes/project')
const photo = require('./routes/photo')

module.exports = app => {
  article(router)
  user(router)
  project(router)
  photo(router)
  app.use(router.routes())
    .use(router.allowedMethods())
}