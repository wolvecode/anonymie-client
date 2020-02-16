const express = require('express')
const router = express.Router()
const Joi = require('joi')

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

router.get('/suggestion', (req, res, next) => {
  res.send(suggestions)
  next()
})

router.get('/suggestion/:id', (req, res, next) => {
  const suggestion = suggestions.find(c => c.id === parseInt(req.params.id))
  if (!suggestion)
    return res
      .status(404)
      .send('The suggestion with the given ID was not found.')
  res.send(suggestion)
  next()
})

router.post('/suggestion', (req, res) => {
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

router.put('/suggestion/:id', (req, res) => {
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

router.delete('/suggestion/:id', (req, res) => {
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
  

module.exports = router
