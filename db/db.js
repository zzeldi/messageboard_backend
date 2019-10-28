const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'messageboard_user',
    host: 'localhost',
    database: 'messageboard',
    password: 'RA;l2PL./3',
    port: 5432,
});

/**
 * gets all the messages from the server
 * @param request
 * @param response
 */
const getMessages = (request, response) => {
    pool.query('select m.id, m.user_name as "userName", m.date, m.message, ' +
        '        coalesce(' +
        '            (                SELECT array_to_json(array_agg(row_to_json(x)))' +
        '    FROM (        select c.id, c.user_name as "userName", c.date, c.comment_text as "commentText" '+
        '    from comments c' +
        '    where c.message_id= m.id) x),' +
        '    \'[]\') AS comments    from messages m  ', (error, results) => {
        if (error) {
            throw error
        }
        console.log(results.rows);
        response.status(200).json(results.rows)
    })
};

/**
 * saves a new message into the database
 * @param request
 * @param response
 */
const createMessage = (request, response) => {
    const {userName, message} = request.body;
    pool.query('INSERT INTO messages (date, message,user_name) VALUES ($1, $2, $3 )', [new Date(), message, userName], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201);
    })
};

const createComment = (request, response) => {
    const {userName, commentText, messageId} = request.body;
    console.log('commnent', request.body);

    pool.query('INSERT INTO comments (date, comment_text, user_name, message_id) VALUES ($1, $2, $3 , $4)', [new Date(), commentText, userName, messageId], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201);
    })
};

module.exports = {
    getMessages,
    createMessage,
    createComment
};
