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
const User = mongoose.model('dbase1', userSchema)
module.exports = User

/*/ Teacher Schema
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
module.exports = Teacher*/
