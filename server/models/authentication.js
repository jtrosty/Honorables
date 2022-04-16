// Test models - We need to create schemas for the Teacher and the Students

const mongoose = require('mongoose')
// Student Schema
const studentRegister = new mongoose.Schema({
  status: {
    type: Boolean,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  classID: {
    type: String,
    required: false,
  },
})
const Student = mongoose.model('Students', studentRegister)
module.exports = Student;
