const express = require('express')
const router = express.Router()
const Student = require('../../models/Student')
const bcrypt = require('bcryptjs')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
router.all('/*', (req, res, next) => {
    req.app.locals.layout = 'user'
    next()
})
// to call login pages
router.all('/', (req, res) => {
    res.render('user/login')
})

// To get data from login page
router.post('/student', (req, res, next) => {
    res.send("Login System Under Development");
    // passport.authenticate('local', { 
    //     successRedirect: '/admin', 
    //     failureRedirect: '/login',
    //     failureRedirect: true 
    // })(req, res, next)
})
module.exports = router