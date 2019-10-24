const express = require('express');

const Message = require('../models/messageModel');


function routes(Comment) {
    const commentRouter = express.Router();
    commentRouter.route('/comments')
        .get((req, res) => {
            Comment.find((err, comments) => {
                    if (err) {
                        return res.send(err);
                    }
                    return res.json(comments);
                }
            )
        })
        .post((req, res) => {
            const comment = new Comment(req.body);
            comment.date = Date.now();
            comment.save()
                .then((comment) => {
                    Message.findOneAndUpdate({ _id: req.body.messageId },
                        {$push: {comments: comment._id}}, {new: true})
                });

            return res.status(201).json(comment);

        });
    return commentRouter;
}

module.exports = routes;
