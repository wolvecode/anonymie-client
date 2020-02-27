const mongoose = require('mongoose')
const Joi = require('joi')

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 255
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 10,
    maxlength: 255
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024
  }
})

function validateAdmin(admin) {
  const schema = {
    name: Joi.string()
      .min(5)
      .max(255)
      .required(),
    email: Joi.string()
      .min(5)
      .max(255)
      .required(),
    password: Joi.string()
      .min(5)
      .max(1024)
      .required()
  }
  return Joi.validate(admin, schema)
}
const Admin = mongoose.model('Admin', adminSchema)

module.exports.Admin = Admin
module.exports.validate = validateAdmin
