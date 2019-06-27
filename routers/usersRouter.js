const express = require('express')
const usersRouter = express.Router()
const { getUsers } = require('../controllers/usersController')

usersRouter.get('/:username', getUsers)
        
module.exports = usersRouter