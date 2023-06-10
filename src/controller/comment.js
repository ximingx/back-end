const CommentService = require('../service/comment')

class CommentController {
    async create(req, res) {
        const {content, momentId} = req.body;
        const {id} = req.user
        console.log(content, momentId, id)
        const result = await CommentService.create(content, momentId, id)
        res.json({
            result
        })
    }

    async replay(req, res) {
        const { content, momentId, commentId} = req.body
        const {id} = req.user
        const result = await CommentService.replay(content, momentId, commentId, id)
        res.json({
            content, momentId, commentId, id
        })
    }
}

module.exports = new CommentController()
