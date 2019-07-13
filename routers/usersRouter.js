const express = require('express')
const usersRouter = express.Router()
const { getUsers } = require('../controllers/usersController')
const { handle405 } = require('../errors/index')

usersRouter.route('/:username')
            .get(getUsers)
            .all(handle405)
        
module.exports = usersRouter