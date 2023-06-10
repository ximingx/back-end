class FileController {
    single(req, res) {
        res.json({
            file: req.file
        })
    }

    array(req, res) {
        res.json({
            file: req.files
        })
    }
}

module.exports = new FileController()
