const mongoose = require('mongoose')
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
const TModel = mongoose.model('Users', TeacherSchema)
module.exports = TModel
