const koa = require('koa')
const app = new koa()
const db = require('./mongodb/db')
const router = require('./router')
const middleWare = require('./middleware')
const Photo = require('./models/photo')
const Article = require('./models/article')
const Comment = require('./models/comment')


const userModel = require('./models/user')
// const blogModel = require('./models/blog')


middleWare(app)
router(app)
let date = new Date()


// userModel.create({name: 'huajinbo1', age: 22})
// const newBlog = new Article({
//   title: 'testtest',
//   content: 'http',
//   views: 1,
//   classify: 'http',
//   releaseDate: date.toLocaleDateString(),
//   comments: ["5ab5a6b6163c60d7769ce08b","5ab5a6ba10247cd780a77bc8"]
// })
// newBlog.save((err,doc) => {
//   console.log(doc)
// })

// Article.find({})
// .populate({
//   path: 'comments',
//   // select: 'age'
// }).exec((err,doc) => {
//   console.log(doc[0])
// })

// const newArticle = new Article({
//   title: 'testtest',
//       content: 'http',
//       views: 1,
//       classify: 'http',
//       comments:["5ab5a4f82c9b9dd5d1e7c99d", "5ab5a4fa93fd72d5dab5e57d"],
//       releaseDate: date.toLocaleDateString()
// })

// newArticle.save((err,doc) => {
//   console.log(doc)
// })


// Comment.create({
//   email: 'like@vince.studio',
//   content: 'this is content',
//   createDate: date.toLocaleDateString()
// })

// Article.find({})
// .populate('comment').exec((err,doc) => {
//   console.log(doc)
// })

app.listen(3066, () => {
  console.log('server is running at 3066 port')
})