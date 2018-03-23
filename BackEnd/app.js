const koa = require('koa')
const app = new koa()
const db = require('./mongodb/db')
const router = require('./router')
const middleWare = require('./middleware')
const Photo = require('./models/photo')

middleWare(app)
router(app)

// Photo.create({
//   title: "Stringtitle",
//     photoArray: ["Array"],
//     createDate: "201828233"
// })

app.listen(3066, () => {
  console.log('server is running at 3066 port')
})