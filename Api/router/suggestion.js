const express = require('express')
const router = express.Router()
const Joi = require('joi')
const mongoose = require('mongoose')

// const suggestions = [
//   {
//     id: 1,
//     title: 'why mr babatunde',
//     description: 'you are open to talk about mr babatunde last class'
//   },
//   {
//     id: 2,
//     title: 'why mr babatunde',
//     description: 'you are open to talk about mr babatunde last class'
//   },
//   {
//     id: 3,
//     title: 'why mr babatunde',
//     description: 'you are open to talk about mr babatunde last class'
//   }
// ]

const suggestionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  description: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255
  }
})

const Suggestion = mongoose.model('Suggestion', suggestionSchema)

router.get('/', async (req, res, next) => {
  const suggestion = await Suggestion.find()
  res.send(suggestion)
  next()
})

router.get('/:id', async (req, res, next) => {
  try {
    const suggestion = await Suggestion.findById(req.params.id)
    if (!suggestion)
      return res
        .status(404)
        .send('The suggestion with the given ID was not found.')
    res.send(suggestion)
    next()
  } catch (err) {
    console.log(err.message)
  }
})

router.post('/', async (req, res) => {
  const { error } = val(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  let suggestion = new Suggestion({
    title: req.body.title,
    description: req.body.description
  })
  suggestion = await suggestion.save()
  res.send(suggestion)
})

router.put('/:id', async (req, res) => {
  const suggestion = await Suggestion.findOneAndUpdate(
    req.params.id,
    { title: req.body.title, description: req.body.description },
    { new: true }
  )

  const { error } = val(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  if (!suggestion)
    return res
      .status(404)
      .send('The suggestion with the given ID was not found.')

  res.send(suggestion)
})

router.delete('/:id', async (req, res) => {
  const suggestion = await Suggestion.findByIdAndRemove(req.params.id)

  if (!suggestion)
    return res
      .status(404)
      .send('The suggestion with the given ID was not found.')

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
