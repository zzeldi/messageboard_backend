


const commentModel = {
        userName: {type: String},
        date: {type: Date},
        commentText: {type: String},
       // messageId: {type: Schema.Types.ObjectId, ref: 'Message'}
};

module.exports = ('Comment', commentModel);
