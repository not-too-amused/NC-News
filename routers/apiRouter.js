const topicsRouter = require('./topicsRouter')
const usersRouter = require('./usersRouter')
const express = require('express')
const apiRouter = express.Router()

apiRouter.use('/topics', topicsRouter)
apiRouter.use('/users', usersRouter )


module.exports = apiRouter