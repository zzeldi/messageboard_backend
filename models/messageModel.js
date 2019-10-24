const mongoose = require('mongoose');

const {Schema} = mongoose;


const messageModel = new Schema({
        userName: {type: String},
        date: {type: Date},
        message: {type: String},
        comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
    }
);

module.exports = mongoose.model('Message', messageModel);
