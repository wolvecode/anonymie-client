const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const app = express()
const Joi = require('joi')
const suggestion = require('./router/suggestion')
const comment = require('./router/comment')
const admin = require('./router/admin')
const auth = require('./router/auth')

const connect = require('./connect')

if (!config.get('jwtPrivateKey')) {
  console.error('FATAL ERROR: jwtPrivateKey is not defined.')
  process.exit(1)
}

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/suggestion', suggestion)
app.use('/comment', comment)
app.use('/admin', admin)
app.use('/auth', auth)

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Listening on port ${port}...`))

module.exports = app
