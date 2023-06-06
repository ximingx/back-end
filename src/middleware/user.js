const md5 = require('../utils/md5')
const userService = require('../service/user')

const verifyUserExist = async (req, res, next) => {
    const {name, password} = req.body;
    if (!name || !password) await next([400, 'name or password is empty'])
    const user = await userService.findByName(name);
    if (user.length) await next([409, 'name is exist'])
    await next()
}
const handlePassword = async (req, res, next) => {
    req.body.password = md5(req.body.password)
    await next()
}
module.exports = {
    verifyUserExist,
    handlePassword
}
