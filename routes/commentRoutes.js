const express = require('express');


const db = require('../db/db');

function routes() {
    const commentRouter = express.Router();
    commentRouter.route('/comments')
        .post( db.createComment);
    return commentRouter;
}

module.exports = routes;
