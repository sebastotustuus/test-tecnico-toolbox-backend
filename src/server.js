const express = require('express')
const middlewares = require('./middlewares/handlers')
const routes = require('./routes')
const cors = require('cors')
const compression = require('compression')

const router = express.Router()
const app = express()

// Config
app.use(express.json())
app.use(cors())
app.use(compression())

// Routes
app.use(routes(router))

// Catch 404 Error
app.use(middlewares.notFoundHandler)

// Error Handlers Middlewares

app.use(middlewares.logErrors)
app.use(middlewares.wrapErrors)
app.use(middlewares.errorHandler)

module.exports = app
