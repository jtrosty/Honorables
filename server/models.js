// Test models - We need to create schemas for the Teacher and the Students

const mongoose = require('mongoose')
// Student Schema
const StudentSchema = new mongoose.Schema({
  emailAddress: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
})
const Students = mongoose.model('User', StudentSchema)
module.exports = Students

// Teacher Schema
const TeacherSchema = new mongoose.Schema({
  emailAddress: {
    type: String,
    required: true,
  },
  teacherID: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
})
const Teacher = mongoose.model('User', TeacherSchema)
module.exports = Teacher
