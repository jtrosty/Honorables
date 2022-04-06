const mongoose = require('mongoose')
// Student Schema
const tMessage = new mongoose.Schema({
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
const TMessage = mongoose.model('Messages', tMessage)
module.exports = TMessage
