const express = require('express')
const usersRouter = express.Router();

const {verifyUserExist, handlePassword} = require('../middleware/user')
const userController = require('../controller/user')

usersRouter.post('/', verifyUserExist, handlePassword, userController.create)

module.exports = usersRouter;
