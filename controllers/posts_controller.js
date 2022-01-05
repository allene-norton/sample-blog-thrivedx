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

router.post('/', (req, res) => {
    db.Post.create(req.body)
        .then(() => {
            res.redirect('/posts')
        })
        .catch(err => {
            if (err && err.name == 'ValidationError') {
                let message = 'Validation Error: '
                for (var field in err.errors) {
                    message += `${field} was ${err.errors[field].value}. ${err.errors[field].message}\n`
                }
                res.render('posts/new', { message })
            }
            else {
                res.render('my404')
            }
        })
})

router.get('/new', (req, res) => {
    res.render('posts/new')
})

router.get('/:id', (req, res) => {
    db.Post.findOne({ id: req.params.id })
        .then(post => {
            console.log(post)
            res.render('posts/show', { post })
        })
        .catch(err => {
            console.log('err', err)
            res.render('my404')
        })
})

module.exports = router