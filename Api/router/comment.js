const express = require('express')
const router = express.Router()
const { Comment, validate } = require('../model/comment')
const mongoose = require('mongoose')

router.get('/', async (req, res, next) => {
  const comment = await Comment.find()
  res.send(comment)
  next()
})

router.post('/', async (req, res) => {
  const { error } = validate(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  let comment = new Comment({
    title: req.body.title,
    description: req.body.description
  })

  comment = await comment.save()
  res.send(comment)
})

router.put('/:id', async (req, res) => {
  let comment = await Comment.findByIdAndUpdate(req.params.id)
  if (!comment) return res.status(404).send('No comment with the particular id')

  const { error } = validate(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  comment = new Comment({
    title: req.body.title,
    description: req.body.description
  })
  res.send(comment)
})

module.exports = router
