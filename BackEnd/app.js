const koa = require('koa')
const app = new koa()
const db = require('./mongodb/db')
const updateProject = require('./controller/project/updateProject')
const router = require('./router')
const middleWare = require('./middleware')


middleWare(app)
router(app)

app.listen(3067, () => {
  console.log('server is running at 3067 port')
})