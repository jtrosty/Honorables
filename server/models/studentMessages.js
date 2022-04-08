const mongoose = require('mongoose')
// Student Schema
const sMessage = new mongoose.Schema({
  from: {
    type: String,
    required: true,
  },
  fromEmail: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
})
const SMessage = mongoose.model('Messages', sMessage)
module.exports = SMessage
