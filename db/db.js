const Pool = require('pg').Pool

const pool = new Pool({
    user: 'messageboard_user',
    host: 'localhost',
    database: 'messageboard',
    password: 'RA;l2PL./3',
    port: 5432,
})

/**
 * gets all the messages from the server
 * @param request
 * @param response
 */
const getMessages = (request, response) => {
    pool.query('SELECT * FROM messages ORDER BY date ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}


const createMessage = (request, response) => {
    const {userName, message} = request.body
    pool.query('INSERT INTO messages (date, message,user_name) VALUES ($1, $2, $3 )', [new Date(), message, userName], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201);
    })
}

module.exports = {
    getMessages,
    createMessage
}
