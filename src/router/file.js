const express = require('express');
const fs = require('fs')
const path = require('path')
const multer = require('multer')
const uploadRouter = express.Router();
const verifyAuth = require('../middleware/auth')


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

uploadRouter.post('/single', verifyAuth, upload.single('file'), (req, res) => {
    res.json({
        file: req.file
    })
})

uploadRouter.post('/array', verifyAuth, upload.array('file'), (req, res) => {
    res.json({
        file: req.files
    })
})

module.exports = uploadRouter;
