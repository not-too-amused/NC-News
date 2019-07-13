const { removeComment, updateComment } = require('../models/commentsModels')

exports.deleteComments = (req, res, next) => {
    removeComment(req.params)
    .then( (comment) => {
        res.status(204).send({comment})
    })
    .catch(next)
}
exports.patchComments = (req, res, next) => {
    updateComment(req.body, req.params)
        .then( (comments_id) => {
            res.status(202).send({comments_id})
        })
    .catch(next)
}