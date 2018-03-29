const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
  email: {
    type: String,
    default: '不愿意透露email的大佬'
  },
  articleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'article'
  },
  content: String,
  replyed: {
    type: Boolean,
    default: false
  },
  createDate: {
    type: String,
    default: ""
  }
})

const Comment = mongoose.model('comment', commentSchema)

module.exports = Comment