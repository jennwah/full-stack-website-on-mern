const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
require("dotenv").config()
const app = express();

// routes related
const locationRoute = require('./routes/location');


//mongodb connection
mongoose.connect(process.env.MONGODB_URI,{
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(console.log('mongoDB connected!'))

mongoose.connection.on('error', err => {
  console.log(`DB connection eror: ${err.message}`);
})


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(cors());

// apis
app.use('/api/locations', locationRoute);

// to deliver static files from react built project
// app.use(express.static(path.join(__dirname, '../build')))
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../build'))
// })

app.get('/', function (req, res) {
  res.send('Hello World')
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}!`)
})