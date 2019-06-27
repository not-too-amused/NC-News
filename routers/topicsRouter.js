const express = require('express')
const topicsRouter = express.Router()
const { getTopics } = require('../controllers/topicsController')

topicsRouter.get('/', getTopics)

module.exports = topicsRouter