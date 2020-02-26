const express = require('express')
const router = express.Router()
const { Suggestion, validate} = require('../model/suggestion')
const mongoose = require('mongoose')

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
  const { error } = validate(req.body)
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

  const { error } = validate(req.body)
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

module.exports = router
