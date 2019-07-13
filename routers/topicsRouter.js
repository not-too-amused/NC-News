const express = require('express')
const topicsRouter = express.Router()
const { getTopics } = require('../controllers/topicsController')
const { handle405 } = require('../errors/index')

topicsRouter.route('/')
            .get(getTopics)
            .all(handle405)

module.exports = topicsRouter