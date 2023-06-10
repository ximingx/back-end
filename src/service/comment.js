const connection = require("../app/database");

class CommentService {
    async create(content, momentId, id) {
        const statement = `INSERT INTO comment (content, moment_id, user_id) VALUES (?, ?, ?);`
        return await connection.execute(statement, [content, momentId, id])
    }

    async replay(content, momentId, commentId, id) {
        const statement = `INSERT INTO comment (content, moment_id, comment_id, user_id) VALUES (?, ?,?, ?);`
        return await connection.execute(statement, [content, momentId, commentId, id])
    }
}

module.exports = new CommentService()
