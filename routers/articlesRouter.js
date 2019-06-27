const express = require('express')
const articlesRouter = express.Router()
const { getArticles } = require('../controllers/articlesController')

articlesRouter.get('/:article_id', getArticles)
        
module.exports = articlesRouter