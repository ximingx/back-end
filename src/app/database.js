const mysql = require('mysql2')

const connectionPool = mysql.createPool({
    host: "101.42.176.212",
    port: 3306,
    database: '',
    connectionLimit: 5,
    user: "",
    password: ""
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
