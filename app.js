const express = require('express')
const app = express()
const apiRouter = require('./routers/apiRouter')
// const catch404s = require('./errors')

app.use(express.json())
app.use('/api', apiRouter)
// app.use('/*', catch404s)
app.use('/*', (req, res, next) => {
    res.status(404).send('Route not found')
})

// app.use(sendCode)



module.exports = app