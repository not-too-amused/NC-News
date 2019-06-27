const { fetchArticles } = require('../models/articlesModels')

exports.getArticles = (req, res, next) => {
    
    fetchArticles(req.params)
    .then((articles) => {
        res.status(200).send({articles})
    })
    .catch(console.log)
}