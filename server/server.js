// Load mongoose
const express = require('express')
const mongoose = require('mongoose')
const Student = require('./models/authentication')
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

app.post('/register', async (req, res) => {
  const studentData = req.body

  const newStudent = new Student(studentData)
  newStudent
    .save()
    .then(() => res.json('User Registered!'))
    .catch((err) => res.status(400).json('Error: ' + err))

  //res.json(studentData)
})

app.get('/getRegisterDataByName', async (req, res) => {
  console.log(req.body)
  const username = await req.body.username // http protocol stuff, express libary stuf
  //{username: "test insomnia get"}
  Student.findOne({ username: req.query.username }, (err, result) => {
    console.log(username)
    if (err) {
      res.json(err)
    } else {
      res.json(result)
      console.log(result)
      console.log(res.get('username'))
    }
  })
})

app.get('/getWikiData', (req, res) => {
  wikiDataModel.find({ assignment: req.query.assNum }, (err, result1) => {
    if (err) {
      res.json(err)
    } else {
      res.json(result1)
    }
  })
})

app.get('/getAssNums', (req, res) => {
  wikiDataModel.find({}, 'assignment', (err, result1) => {
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
app.listen(5000, () => {
  console.log('Server is running at port 5000')
})
