const express = require('express')
const commentsRouter = express.Router()
const { deleteComments, patchComments }  = require('../controllers/commentsController')
const { handle405 } = require('../errors/index')

commentsRouter.route('/:comments_id')
                .delete(deleteComments)
                .patch(patchComments)
                .all(handle405)

module.exports = commentsRouter