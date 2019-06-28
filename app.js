const express = require('express')
const apiRouter = require('./routers/apiRouter')
const app = express()
// const {  } = require('./errors/')

app.use(express.json())
app.use('/api', apiRouter)



module.exports = app