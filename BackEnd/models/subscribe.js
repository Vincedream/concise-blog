const mongoose = require('mongoose')
const Schema = mongoose.Schema

const subscribeSchema = new Schema({
  email: String,
  status: {
    type: Boolean,
    default: true
  }
})

const Subscribe = mongoose.model('subscribe', subscribeSchema)

module.exports = Subscribe