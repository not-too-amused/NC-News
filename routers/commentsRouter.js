const express = require('express')
const commentsRouter = express.Router()
const { deleteComments }  = require('../controllers/commentsController')

commentsRouter.delete('/:comments_id', deleteComments)

module.exports = commentsRouter