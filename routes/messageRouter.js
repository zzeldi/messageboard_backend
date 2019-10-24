const express = require('express');
const db = require('../db/db');

function routes() {
    const messageRouter = express.Router();
    messageRouter.route('/messages')
        .get(db.getMessages)
        .post(db.createMessage
        );

    /*messageRouter.route('/messages/:messageId')
        .get((req, res) => {
            Message.findById(req.params.messageId, (err, message) => {
                    if (err) {
                        return res.send(err);
                    }
                    message.populate('comments');
                    return res.json(message);
                }
            )
        })
        .put((req, res) => {
            Message.findById(req.params.messageId, (err, message) => {
                    if (err) {
                        return res.send(err);
                    }
                    message.userName = req.body.userName;
                    message.date = req.body.date;
                    message.message = req.body.message;
                    message.save();
                    return res.json(message);
                }
            )
        });*/
    return messageRouter;
}

module.exports = routes;
