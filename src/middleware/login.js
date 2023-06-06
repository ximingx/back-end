const md5 = require('../utils/md5')
const userService = require('../service/user')

const verifyLogin = async (req, res, next) => {
    const {name, password} = req.body
    if (!name || !password) next([400, '用户名或密码不能为空'])
    const user = await userService.findByName(name)
    if (!user.length) next([400, '用户不存在'])
    if (user[0].password !== md5(password)) next([400, '密码错误'])
    req.user = user[0]
    next()
}

module.exports = {
    verifyLogin
}
