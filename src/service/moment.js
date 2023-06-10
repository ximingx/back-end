const connection = require("../app/database");

class MomentService {
    async create(content, userId) {
        const statement = `INSERT INTO moment (content, user_id) VALUES (?, ?);`
        const res = await connection.execute(statement, [content, userId])
        return res[0]
    }

    async list(offset, size) {
        const statement = `SELECT m.id                                                                              id,
       m.content                                                                         content,
       m.createAt                                                                        createAt,
       m.updateAt                                                                        updateAt,
       JSON_OBJECT('id', u.id, 'name', u.name, 'createAt', u.createAt, 'updateAt' ,u.updateAt) user,
       (SELECT COUNT(*) FROM comment where comment.moment_id = m.id)                           commentCount
FROM moment m
         LEFT JOIN user u ON u.id = m.user_id
LIMIT ?, ?;`
        const res = await connection.execute(statement, [offset + '', size + ''])
        return res[0]
    }

    async detail(momentId) {
        const statement = `SELECT m.id                                                                                    id,
       m.content                                                                               content,
       m.createAt                                                                              createAt,
       m.updateAt                                                                              updateAt,
       JSON_OBJECT('id', u.id, 'name', u.name, 'createAt', u.createAt, 'updateAt', u.updateAt) user,
       (
           JSON_ARRAYAGG(JSON_OBJECT(
               'id', c.id,
               'content', c.content,
               'commentId', c.comment_id,
               'userId', JSON_OBJECT('id', cu.id, 'name', cu.name)
               ))
           ) comments
FROM moment m
         LEFT JOIN user u ON m.user_id = u.id
         LEFT JOIN comment c ON c.moment_id = m.id
         LEFT JOIN user cu ON cu.id = c.user_id
WHERE m.id = ?
GROUP BY m.id;`
        const res = await connection.execute(statement, [momentId + ''])
        return res[0]
    }

    async update(id, content) {
        const statement = `UPDATE moment SET content = ? WHERE id = ?;`
        const res = await connection.execute(statement, [content, id])
        return res[0]
    }

    async delete(id) {
        const statement = `DELETE FROM moment WHERE id = ?;`
        return await connection.execute(statement, [id])
    }
}

module.exports = new MomentService()
