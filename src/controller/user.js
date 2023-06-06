const userService = require('../service/user');

class UserController {
    async create(req, res) {
        const user = req.body;
        const result = await userService.create(user);
        res.json({
            msg: 'success',
            data: result
        })
    }
}

module.exports = new UserController();
