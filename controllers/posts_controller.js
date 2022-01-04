const express = require('express')
const posts = express.Router()
const Post = require('../models/bread.js')

// INDEX
breads.get('/', (req, res) => {
  res.send(Bread)
})

module.exports = posts