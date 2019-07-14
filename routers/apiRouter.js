const topicsRouter = require('./topicsRouter')
const usersRouter = require('./usersRouter')
const articlesRouter = require('./articlesRouter')
const commentsRouter = require('./commentsRouter')
const express = require('express')
const apiRouter = express.Router()
const handle405 = require('../errors')
const endPoints = require("../endpoints.json");

apiRouter.use('/topics', topicsRouter)
apiRouter.use('/users', usersRouter)
apiRouter.use('/articles', articlesRouter)
apiRouter.use('/comments', commentsRouter)

apiRouter.get((req, res, next) => {
  res.status(200).send(endPoints)
})
apiRouter.all(handle405)

module.exports = apiRouter