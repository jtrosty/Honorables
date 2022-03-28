// Load mongoose
const express = require('express')
const mongoose = require('mongoose')
const Router = require('./routes')

const app = express()

app.use(express.json())
// Connect to mongoDB - Not sure if you guys wanted to use a specific credentials
mongoose.connect('mongodb://localhost:27017/usersdb', {
  useNewUrlParser: true,
})
// Check the success
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error: '))
db.once('open', function () {
  console.log('Connected successfully')
})
// Sets the app to use port 3000
app.use(Router)

app.listen(3000, () => {
  console.log('Server is running at port 3000')
})
