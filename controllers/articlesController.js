const { fetchArticles, updateArticles } = require('../models/articlesModels')

exports.getArticles = (req, res, next) => {
    fetchArticles(req.params)
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
