const express = require('express')
const articlesRouter = express.Router()
const { getArticles, patchArticles, postComment, getComments } = require('../controllers/articlesController')
const {catch400} = require('../errors')

articlesRouter.route('/')
                .get(getArticles)

articlesRouter.route('/:article_id')
                .get(getArticles)
                .patch(patchArticles)

articlesRouter.route('/:article_id/comments')                
                .get(getComments)
                .post(postComment)

articlesRouter.use(catch400)
        
module.exports = articlesRouter