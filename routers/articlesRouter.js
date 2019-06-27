const express = require('express')
const articlesRouter = express.Router()
const { getArticles, patchArticles } = require('../controllers/articlesController')

articlesRouter.route('/:article_id')
                .get(getArticles)
                .patch(patchArticles)
        
module.exports = articlesRouter