const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Joi = require('joi')

// const comments = [
//   {
//     id: 1,
//     title: 'mr bababtunde',
//     description: 'you are open to talk about mr babatunde last class'
//   },
//   {
//     id: 2,
//     title: 'mr bababtunde',
//     description: 'you are open to talk about mr babatunde last class'
//   },
//   {
//     id: 3,
//     title: 'mr bababtunde',
//     description: 'you are open to talk about mr babatunde last class'
//   }
// ]

const commentSchema = new mongoose.Schema({
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

const Comment = mongoose.model('Comment', commentSchema)

router.get('/', async (req, res, next) => {
  const comment = await Comment.find()
  res.send(comment)
  next()
})

router.post('/', async (req, res) => {
  const { error } = val(req.body)
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

  const { error } = val(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  comment = new Comment({
    title: req.body.title,
    description: req.body.description
  })
  res.send(comment)
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
