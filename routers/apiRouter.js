const topicsRouter = require('./topicsRouter')
const usersRouter = require('./usersRouter')
const articlesRouter = require('./articlesRouter')
const express = require('express')
const apiRouter = express.Router()

apiRouter.use('/topics', topicsRouter)
apiRouter.use('/users', usersRouter )
apiRouter.use('/articles', articlesRouter)


module.exports = apiRouter