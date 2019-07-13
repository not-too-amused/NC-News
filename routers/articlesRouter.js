const express = require('express')
const articlesRouter = express.Router()
const { getArticles, patchArticles, postComment, getComments } = require('../controllers/articlesController')
const {handle405, catch400} = require('../errors')

articlesRouter.route('/')
                .get(getArticles)
                .all(handle405)

articlesRouter.route('/:article_id')
                .get(getArticles)
                .patch(patchArticles)
                .all(handle405)

articlesRouter.route('/:article_id/comments')                
                .get(getComments)
                .post(postComment)
                .all(handle405)

articlesRouter.use(catch400)
        
module.exports = articlesRouter