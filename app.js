const express = require('express');

const debug = require('debug')('app');
const bodyParser = require('body-parser');

var app = express();
const db = require('./db/db');
const port = process.env.PORT || 3001;


const Commenmt = require('./models/commentModel');
const commentRouter = require('./routes/commentRoutes')(db);
console.log('comment router:',commentRouter);
const Message = require('./models/messageModel');
const messageRouter = require('./routes/messageRouter')(Message);
console.log('message router:',messageRouter);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', commentRouter);
app.use('/api', messageRouter);



app.get('/', function(req,res){
  res.send('Messageboard backend running');
})

app.listen(port, () => {
    console.log('Running on port ' + port);
});

module.exports = app;
