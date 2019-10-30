const express = require('express');
const db = require('../db/db');

function routes() {
    const messageRouter = express.Router();
    messageRouter.route('/messages')
        .get(db.getMessages)
        .post(db.createMessage );
    return messageRouter;
}

module.exports = routes;
