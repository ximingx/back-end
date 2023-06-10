const MomentService = require('../service/moment')

class MomentController {
    async create(req, res) {
        const {content} = req.body
        const {id} = req.user
        const result = await MomentService.create(content, id)
        res.json({
            content,
            result
        })
    }

    async list(req, res) {
        const {offset = "0", size = "10"} = req.query;
        const result = await MomentService.list(offset, size);
        res.json({
            result
        })
    }

    async detail(req, res) {
        const {momentId} = req.params;
        const result = await MomentService.detail(momentId);
        res.json({
            result
        })
    }

    async update(req, res) {
        const {momentId} = req.params;
        const {content} = req.body;
        const result = await MomentService.update(momentId, content);
        res.json({
            result
        })
    }

    async delete(req, res) {
        const {momentId} = req.params;
        const result = await MomentService.delete(momentId);
        res.json({
            result
        })
    }
}

module.exports = new MomentController()
