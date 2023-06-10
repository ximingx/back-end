const express = require('express')
const CommentRouter = express.Router();

const verifyAuth = require('../middleware/auth')
const CommentController = require('../controller/comment')


CommentRouter.post('/', verifyAuth, CommentController.create)

CommentRouter.post('/reply', verifyAuth, CommentController.replay)

module.exports = CommentRouter;
