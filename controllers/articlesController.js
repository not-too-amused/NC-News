const { fetchArticles, updateArticles, fetchComments, createComment } = require('../models/articlesModels')

exports.getArticles = (req, res, next) => {
    fetchArticles(req.params, req.query)
    .then( articles => {
        res.status(200).send({articles})
    })
    .catch(next)
}
exports.patchArticles = (req, res, next) => {
    updateArticles(req)
        .then( articles  => {
            res.status(202).send({articles})
        })
    .catch(next)
}
exports.getComments = (req, res, next) => {
    fetchComments(req.params, req.query)
    .then( (params) => res.status(200).send(params)
    )
.catch(next)
}
    

exports.postComment = (req, res, next) => {
    createComment(req.body, req.params)
        .then( comments => {
            res.status(201).send(comments)
        })
    .catch(next)
}
