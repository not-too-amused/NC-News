const express = require('express')
const articlesRouter = express.Router()
const { getArticles, patchArticles, postComment } = require('../controllers/articlesController')


articlesRouter.route('/')
                .get(getArticles)

articlesRouter.route('/:article_id')
                .get(getArticles)
                .patch(patchArticles)

articlesRouter.route('/:article_id/comments')                
                .post(postComment)
        
module.exports = articlesRouter