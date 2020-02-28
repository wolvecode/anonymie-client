const express = require('express')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const _ = require('lodash')
const jwt = require('jsonwebtoken')
const config = require('config')
const router = express.Router()
const { Admin, validate } = require('../model/admin')

router.get('/', async (req, res) => {
  const admin = await Admin.find()
  res.send(admin)
})

router.post('/', async (req, res) => {
  const { error } = validate(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  let admin = await Admin.findOne({ email: req.body.email })
  if (admin) return res.status(400).send('Admin is already resgistered')

  admin = new Admin(_.pick(req.body, ['name', 'email', 'password']))

  const salt = await bcrypt.genSalt(10)
  admin.password = await bcrypt.hash(admin.password, salt)

  admin = await admin.save()

  const token = admin.generateAuthToken()
  res
    .header('x-auth-token', token)
    .send(_.pick(admin, ['_id', 'name', 'email']))
})

module.exports = router
