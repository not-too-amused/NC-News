const { removeComment } = require('../models/commentsModels')

exports.deleteComments = (req, res, next) => {
    removeComment(req.params)
    .then( (comment) => {
        res.status(204).send({comment})
    })
    .catch(console.log)
}