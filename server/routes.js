// Load express and the schema created
const express = require('express')
const Student = require('./models')
const app = express()

// Creates POST endpoint
app.post('/add_user', async (request, response) => {
  const user = new Student(request.body)

  try {
    await user.save()
    response.send(user)
  } catch (error) {
    response.status(500).send(error)
  }
})

// Creates GET endpoint
app.get('/users', async (request, response) => {
  const users = await userModel.find({})

  try {
    response.send(users)
  } catch (error) {
    response.status(500).send(error)
  }
})

module.exports = app
