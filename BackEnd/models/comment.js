const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
  email: {
    type: String,
    default: '不愿意透露email的大佬'
  },
  content: String,
  createDate: {
    type: Date,
    default: Date.now()
  }
})

const Comment = mongoose.model('comment', commentSchema)

module.exports = Comment