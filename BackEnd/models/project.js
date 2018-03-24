const mongoose = require('mongoose')
const Schema = mongoose.Schema

const projectSchema = new Schema({
  fullName: String,
  description: String,
  language: String,
  stars: Number,
  forks: Number
})

const Project = mongoose.model('project', projectSchema)

module.exports = Project