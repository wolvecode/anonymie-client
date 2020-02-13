const express = require('express')
const app = express()
const Joi = require('joi')

app.use(express.json())

const suggestions = [
  {
    id: 1,
    title: 'why mr babatunde',
    description: 'you are open to talk about mr babatunde last class'
  },
  {
    id: 2,
    title: 'why mr babatunde',
    description: 'you are open to talk about mr babatunde last class'
  },
  {
    id: 3,
    title: 'why mr babatunde',
    description: 'you are open to talk about mr babatunde last class'
  }
]

const comments = [
  {
    id: 1,
    title: 'mr bababtunde',
    description: 'you are open to talk about mr babatunde last class'
  },
  {
    id: 2,
    title: 'mr bababtunde',
    description: 'you are open to talk about mr babatunde last class'
  },
  {
    id: 3,
    title: 'mr bababtunde',
    description: 'you are open to talk about mr babatunde last class'
  }
]

app.get('/suggestion', (req, res, next) => {
  res.send(suggestions)
  next()
})

app.get('/suggestion/:id', (req, res, next) => {
  const suggestion = suggestions.find(c => c.id === parseInt(req.params.id))
  if (!suggestion)
    return res
      .status(404)
      .send('The suggestion with the given ID was not found.')
  res.send(suggestion)
  next()
})

app.post('/suggestion', (req, res) => {
  const { error } = val(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  const suggestion = {
    id: suggestions.length + 1,
    title: req.body.title,
    description: req.body.description
  }

  suggestions.push(suggestion)
  res.send(suggestion)
  next()
})

/*****
 COMMENT
 */
app.get('/comment', (req, res, next) => {
  res.send(comments)
  next()
})

app.post('/comment', (req, res) => {
  const { error } = val(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  const comment = {
    id: comments.length + 1,
    title: req.body.title,
    description: req.body.description
  }

  comments.push(comment)
  res.send(comment)
})

/*** */
app.put('/suggestion/:id', (req, res) => {
  const suggestion = suggestions.find(c => c.id === parseInt(req.params.id))

  const { error } = val(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  if (!suggestion)
    return res
      .status(404)
      .send('The suggestion with the given ID was not found.')

  suggest = {
    title: req.body.title,
    description: req.body.description
  }

  res.send(suggest)
})

app.delete('/suggestion/:id', (req, res) => {
  const suggestion = suggestions.find(c => c.id === parseInt(req.params.id))
  if (!suggestion)
    return res
      .status(404)
      .send('The suggestion with the given ID was not found.')

  const index = suggestions.indexOf(suggestion)
  suggestions.splice(index, 1)

  res.send(suggestion)
})

function val(suggestion) {
  const schema = {
    title: Joi.string()
      .min(3)
      .required(),
    description: Joi.string()
      .min(3)
      .required()
  }

  return Joi.validate(suggestion, schema)
}

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Listening on port ${port}...`))
