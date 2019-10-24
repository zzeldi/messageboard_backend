const messageModel = {
    userName: {type: String},
    date: {type: Date},
    message: {type: String},
    // comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
};

module.exports = messageModel;
