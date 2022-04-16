// Load express and the schema created
const express = require('express')
const Student = require('./models')
const app = express()

// Login function might seem like it need to be a get function, but we are sending credentials so we use a post
app.post('/login', function (req, res) {
  const status = req.body.status
  const username = req.body.userName
  const password = req.body.password

  Student.findOne(
    { status: status, userName: username, password: password },
    function (err, user) {
      if (err) {
        console.log(err)
        return res.status(500).send()
      } else {
        return res.status(200).send(user)
      }
    }
  )
})
//
//app.post('/register', function (req, res) {
//  const status = 'Student'
//  const userName = req.body.username
//  const password = req.body.password
//  const email = req.body.email
//
//  const newStudent = new Student()
//  newStudent.status = status
//  newStudent.userName = userName
//  newStudent.password = password
//  newStudent.email = email
//  newStudent.save(function (err, savedStudent) {
//    if (err) {
//      console.log(err)
//      return res.status(500).send()
//    } else {
//      return res.status(200).send()
//    }
//  })
//})

module.exports = app
