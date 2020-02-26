const Joi = require('joi')
const mongoose = require('mongoose')

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

exports.Suggestion = Suggestion
exports.val = validate
