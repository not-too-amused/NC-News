const express = require('express')
const usersRouter = express.Router()
const { getUsers } = require('../controllers/usersController')
const { handle405 } = require('../errors/index')

usersRouter.route('/:username')
            .get(getUsers)
            .all(handle405)
usersRouter.use('/*', (req, res, next) => {
                res.status(404).send('User not found')
            })
        
module.exports = usersRouter