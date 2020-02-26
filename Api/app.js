const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Joi = require('joi')
const suggestion = require('./router/suggestion')
const comment = require('./router/comment')
app.use(express.json())
app.use(express.urlencoded())

mongoose
  .connect('mongodb://localhost/anoymie', { useNewUrlParser: true })
  .then(() => console.log('connected to database'))
  .catch(err => console.err('inavlid connection'))

app.use('/suggestion', suggestion)
app.use('/comment', comment)

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Listening on port ${port}...`))
