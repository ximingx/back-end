const express = require('express');
const MomentRouter = express.Router();

const verifyAuth = require('../middleware/auth')
const verifyPermission = require('../middleware/moment')
const MomentControl = require('../controller/moment')

MomentRouter.post('/', verifyAuth, MomentControl.create)

MomentRouter.get('/', MomentControl.list)

MomentRouter.get('/:momentId', MomentControl.detail)

MomentRouter.delete('/:momentId', verifyAuth, verifyPermission, MomentControl.delete)

MomentRouter.patch('/:momentId', verifyAuth, verifyPermission, MomentControl.update)

module.exports = MomentRouter;
