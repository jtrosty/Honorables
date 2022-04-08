// Test models - We need to create schemas for the Teacher and the Students

const mongoose = require('mongoose')
// Student Schema
const userSchema = new mongoose.Schema({
  status: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
})
const SModel = mongoose.model('Users', userSchema)
module.exports = SModel
