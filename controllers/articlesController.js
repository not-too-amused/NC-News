const { fetchArticles, updateArticles, fetchComments, createComment } = require('../models/articlesModels')

exports.getArticles = (req, res, next) => {
    fetchArticles(req.params, req.query)
    .then((articles) => {
        res.status(200).send({articles})
    })
    .catch(console.log)
}
exports.patchArticles = (req, res, next) => {
    updateArticles(req)
        .then((articles) => {
            res.status(202).send({articles})
        })
    .catch(console.log)
}
exports.getComments = (req, res, next) => {
    fetchComments(req.params, req.query)
    .then( (params) => res.status(200).send(params)
    )
.catch(console.log)
}
    

exports.postComment = (req, res, next) => {
    createComment(req.body, req.params)
        .then(comments => {
            // console.log('return this<<!!', comments)
            
            res.status(201).send(comments)
        })
    .catch(console.log)
}
