const express = require('express');

function routes(Message) {
    const messageRouter = express.Router();
    messageRouter.route('/messages')
        .get((req, res) => {
            // lista, genre-re filterel
            const query = {};
            if (req.query.genre) {
                query.genre = req.query.genre;
            }
            Message.find(query, (err, messages) => {
                    if (err) {
                        return res.send(err);
                    }
                    return res.json(messages);
                }
            )
        })
        .post((req, res) => {
            const message = new Message(req.body);
            message.date = Date.now();
            message.save();
            return res.status(201).json(message);

        });

    messageRouter.route('/messages/:messageId')
        .get((req, res) => {
            Message.findById(req.params.messageId, (err, message) => {
                    if (err) {
                        return res.send(err);
                    }
                    return res.json(message);
                }
            )
        })
        //adatok mentese
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
        });
    return messageRouter;
}

module.exports = routes;
