const jwt = require('jsonwebtoken')
const {PRIVATE_KEY} = require('../config/key')

class LoginController {
    async sign(req, res) {
        const user = req.user
        const token = jwt.sign(user, PRIVATE_KEY, {
            algorithm: 'RS256',
            expiresIn: 60 * 60 * 24 * 30
        })
        res.json({
            user: req.user,
            token
        })
    }
}

module.exports = new LoginController()
