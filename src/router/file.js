const express = require('express');
const path = require('path')
const multer = require('multer')
const uploadRouter = express.Router();

const verifyAuth = require('../middleware/auth')
const FileController = require('../controller/file')

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, callback) {
            callback(null, path.resolve(__dirname, '../../public/uploads'))
        },
        filename(req, file, callback) {
            callback(null, Date.now() + '_' + file.originalname)
        }
    })
})

uploadRouter.post('/single', verifyAuth, upload.single('file'), FileController.single)

uploadRouter.post('/array', verifyAuth, upload.array('file'), FileController.array)

module.exports = uploadRouter;
