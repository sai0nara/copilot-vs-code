// Create web server

// Require modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// Create Express app
const app = express();

// Set up body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set up CORS
app.use(cors());

// Set up routes
app.use('/api', require('./routes/api'));

// Set up error handling
app.use(function(err, req, res, next) {
  res.status(422).send({ error: err.message });
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost/comments');
mongoose.Promise = global.Promise;

// Listen for requests
app.listen(process.env.port || 4000, function() {
  console.log('Now listening for requests');
});


