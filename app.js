const express = require('express');
const mongoose = require('mongoose');
const debug = require('debug')('app');
const bodyParser = require('body-parser');

var app = express();
const db = mongoose.connect('mongodb://localhost/messageboard');
const port = process.env.PORT || 3001;

const Message = require('./models/messageModel');
const messageRouter = require('./routes/messageRouter')(Message);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use('/api', messageRouter);


app.get('/', function(req,res){
  res.send('Messageboard backend running');
})

app.listen(port, () => {
    console.log('Running on port ' + port);
});

module.exports = app;
