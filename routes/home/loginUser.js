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
passport.use(new LocalStrategy(
    (username, password, done) => {
        Student.findOne({ username: username }).then(student => {
            if(!student){
                return done(null, false, { message: "No User Found" })
            }
            bcrypt.compare(password, student.password, (err, matched) => {
                if(err) return err 
                if(matched) {
                    return done(null, student)
                } else {
                    return done(null, false, { message: "Incorrect Password" })
                }
            })
        })
    }
))
passport.serializeUser((student, done) => {
    done(null, student.id)
})
passport.deserializeUser((id, done) => {
    Student.findById(id, (err, student) => {
        done(err, student)
    })
})
router.post('/student', (req, res, next) => {
    // res.send("Login System Under Development");
    passport.authenticate('local', { 
        successRedirect: '/admin', 
        failureRedirect: '/login',
        failureFlash: true 
    })(req, res, next)
})
module.exports = router