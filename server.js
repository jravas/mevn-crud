const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// set up express app
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})
// connect to mongodb
mongoose.connect('mongodb://localhost/todoApp')
mongoose.Promise = global.Promise
let db = mongoose.connection

//check connection
db.once('open', () => {
  console.log('Connected to mongodb')
})
// check for db errors
db.on('error', (err) => {
  console.log(err)
})

// use bodyParser middleware
app.use(bodyParser.json())

// use api routes
app.use('/api', require('./routes/api'))

// error handling middleware
app.use((err, req, res, next) => {
  // send error message in response
  res.status(422).send({error: err.message})
})

// listen for requests
app.listen(process.env.port || 3000, ()=> {
  console.log('Listening on port 3000')
})