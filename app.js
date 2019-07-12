const express = require('express')
const apiRouter = require('./routers/apiRouter')
const app = express()
const { catch404s } = require('./handle_errors/')

app.use(express.json())
app.use('/api', apiRouter)
app.use(catch404s)



module.exports = app