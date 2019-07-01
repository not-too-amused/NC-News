const express = require('express')
const commentsRouter = express.Router()
const { deleteComments, patchComments }  = require('../controllers/commentsController')

commentsRouter.route('/:comments_id')
                .delete(deleteComments)
                .patch(patchComments)

module.exports = commentsRouter