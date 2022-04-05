// Load mongoose
const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/models')
//For the wikidata
const wikiDataModel = require('./models/wikiData')

const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())
// Connect to mongoDB - Not sure if you guys wanted to use a specific credentials
mongoose.connect(
  'mongodb+srv://Honorables:CEN3031@imapcluster.jfezn.mongodb.net/HonorablesCluster?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
  }
)
// Check the success
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error: '))
db.once('open', function () {
  console.log('Connected successfully')
})

// Login function might seem like it need to be a get function, but we are sending credentials so we use a post
app.get('/get', (req, res) => {
  User.find({}, (err, result) => {
    if (err) {
      res.json(err)
    } else {
      res.json(result)
    }
  })
})
/*const status = req.body.status
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
  )*/

app.post('/register', function (req, res) {
  const status = req.body.status
  const username = req.body.username
  const password = req.body.password
  const email = req.body.email

  const newStudent = new User({
    status,
    username,
    password,
    email,
  })
  newStudent.save()
})

app.get('/getWikiData', (req, res) => {
  wikiDataModel.find({}, (err, result1) => {
    if (err) {
      res.json(err)
    } else {
      res.json(result1)
    }
  })
})

app.post('/createWikiData', async (req, res) => {
  const wikiData = req.body
  const newWikiData = new wikiDataModel(wikiData)
  await newWikiData.save()

  res.json(wikiData)
})

// Sets the app to use port 3000
app.listen(3000, () => {
  console.log('Server is running at port 3000')
})
