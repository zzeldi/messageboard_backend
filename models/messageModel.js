const mongoose = require('mongoose');

const {Schema} = mongoose;

const messageModel = new Schema({
        id: {type: String},
        userName: {type: String},
        date: {type: Date},
        message: {type: String},
    }
);

module.exports = mongoose.model('Message', messageModel);
