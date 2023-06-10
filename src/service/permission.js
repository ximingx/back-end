const connection = require("../app/database");

class PermissionService  {
    async checkResource(resourceName, resourceId, userId) {
        const statement = `SELECT * FROM ${resourceName} WHERE id = ? AND user_id = ?;`
        const res = await connection.execute(statement, [resourceId, userId])
        return !!res[0].length
    }
}

module.exports = new PermissionService()
