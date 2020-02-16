const express = require('express')
const app = express()
const Joi = require('joi')
const suggestion = require('./router/suggestion')
const comment = require('./router/comment')
app.use(express.json())

app.use(suggestion)
app.use(comment)
/*****
 COMMENT
 */

/*** */

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Listening on port ${port}...`))
