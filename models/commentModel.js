const mongoose = require('mongoose');

const {Schema} = mongoose;

const commentModel = new Schema({
        userName: {type: String},
        date: {type: Date},
        commentText: {type: String},
        messageId: {type: Schema.Types.ObjectId, ref: 'Message'}
    }
);

module.exports = mongoose.model('Comment', commentModel);
