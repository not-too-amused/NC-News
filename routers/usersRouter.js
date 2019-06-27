const express = require('express')
const usersRouter = express.Router()
const { getUsers } = require('../controllers/usersController')

usersRouter.get('/', getUsers)
usersRouter.route('/:username')
            .get(getUsers)
module.exports = usersRouter