const jwt = require('jsonwebtoken')
const {PUBLIC_KEY} = require('../config/key')
const verifyAuth = async (req, res, next) => {
    const authorization = req.headers?.authorization;
    if (!authorization) return next([400, "Unauthorized"])
    const token = authorization.split(' ')[1];
    if (!token) return next([400, "Unauthorized"])
    jwt.verify(token, PUBLIC_KEY, (err, user) => {
        if (err) return next([400, "Unauthorized"])
        req.user = user;
    })
    next()
}

module.exports = verifyAuth
