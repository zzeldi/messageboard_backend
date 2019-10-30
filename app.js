const express = require('express');

const debug = require('debug')('app');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 3001;



const commentRouter = require('./routes/commentRoutes')();

const messageRouter = require('./routes/messageRouter')();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', commentRouter);
app.use('/api', messageRouter);


app.get('/', function (req, res) {
    res.send('Messageboard backend running');
});

app.listen(port, () => {
    console.log('Running on port ' + port);
});

module.exports = app;
