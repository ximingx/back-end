const express = require('express')
const loginRouter = express.Router();

const {verifyLogin} = require('../middleware/login')
const loginController = require('../controller/login')

loginRouter.post('/', verifyLogin, loginController.sign)

module.exports = loginRouter;
