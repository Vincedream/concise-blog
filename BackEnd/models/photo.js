const mongoose = require('mongoose')
const Schema = mongoose.Schema

const photoSchema = new Schema({
  title: String,
  photoArray: Array,
  createDate: Array
})

const Photo = mongoose.model('photo', photoSchema)

module.exports = Photo