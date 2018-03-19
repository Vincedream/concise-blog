const koa = require('koa')
const app = new koa()
const db = require('./mongodb/db')
const router = require('./router')
const middleWare = require('./middleware')

middleWare(app)
router(app)

app.listen(3066, () => {
  console.log('server is running at 3066 port')
})