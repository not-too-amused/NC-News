const topicsRouter = require('./topicsRouter')
const usersRouter = require('./usersRouter')
const articlesRouter = require('./articlesRouter')
const commentsRouter = require('./commentsRouter')
const express = require('express')
const apiRouter = express.Router()
const handle405 = require('../errors')

apiRouter.use('/topics', topicsRouter)
apiRouter.use('/users', usersRouter )
apiRouter.use('/articles', articlesRouter)
apiRouter.use('/comments', commentsRouter)

apiRouter.patch(handle405)

module.exports = apiRouter