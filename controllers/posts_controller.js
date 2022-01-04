const express = require('express')
const router = require('express').Router()
const db = require('../models')

// INDEX
router.get('/', (req, res) => {
    db.Post.find()
        .then((posts) => {
            res.render('posts/index', { posts })
        })
        .catch(err => {
            console.log('err', err)
            res.render('my404')
        })
})

module.exports = router