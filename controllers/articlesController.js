const { fetchArticles, updateArticles, createComment } = require('../models/articlesModels')

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
exports.postComment = (req, res, next) => {
    createComment(req)
    .then( (comment) => {
        res.status(201).send(comment)
    })
    .catch(console.log)
}


//  PLURALISATION ISSUES TO FIX