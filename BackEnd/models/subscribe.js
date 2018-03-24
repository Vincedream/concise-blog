const mongoose = require('mongoose')
const Schema = mongoose.Schema

const subscribeSchema = new Schema({
  email: String,
  createDate: Date
})

const Subscribe = mongoose.model('subscribe', subscribeSchema)

module.exports = Subscribe