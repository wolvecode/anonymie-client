const express = require('express')
const router = express.Router()
const Joi = require('joi')

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

router.get('/comment', (req, res, next) => {
  res.send(comments)
  next()
})

router.post('/comment', (req, res) => {
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

router.put('/comment/:id', (req, res) => {
  const comment = comments.find(c => c.id === parseInt(req.params.id))
  if (!comment) return res.status(404).send('No comment with the particular id')

  const { error } = val(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  comt = {
    title: req.body.title,
    description: req.body.description
  }

  res.send(comt)
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
