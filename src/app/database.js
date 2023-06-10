const mysql = require('mysql2')

const connectionPool = mysql.createPool({
    host: "localhost",
    port: 3306,
    database: 'management',
    connectionLimit: 5,
    user: "root",
    password: "12345678"
})

connectionPool.getConnection((err, connection) => {
    if (err) return console.log("连接数据库失败", err)
    connection.connect(err => {
        if (err) return console.log("数据库交互失败", err)
        console.log("连接数据库成功")
    })
})

const connection = connectionPool.promise()

module.exports = connection
