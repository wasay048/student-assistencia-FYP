const express = require('express')
const router = express.Router()
const Student = require('../../models/Student')
const bcrypt = require('bcryptjs')

router.all('/*', (req, res, next) => {
    req.app.locals.layout = 'user'
    next()
})
router.get('/', (req, res) => {
    res.render('user/register')
})
router.post('/student', (req, res) => {
    const errors = []
    if(!req.body.email) {
        errors.push({ message: '* Please Enter Your Email' })
    }
    if(!req.body.username) {
        errors.push({ message: '* Please Enter Your Username' })
    }
    if(!req.body.password) {
        errors.push({ message: '* Please Enter Password' })
    }
    if(!req.body.confirmPassword) {
        errors.push({ message: '* Confirm Password is Required' })
    }
    if(req.body.password !== req.body.confirmPassword){
        errors.push({ message: "Password Didn't Match" })
    }
    if(errors.length > 0){
       res.render('user/register', {
        errors: errors,
        email: req.body.email,
        username: req.body.username
       })
    } else {
        Student.findOne({ username: req.body.username }).then(student => {
            if(!student){
                const newStudent = new Student({
                    email: req.body.email,
                    username: req.body.username,
                    password: req.body.password
                })
                bcrypt.genSalt(10, (err, salt) => {
                    if(err) throw errors
                    bcrypt.hash(newStudent.password, salt, (err, hash) => {
                        if(err) throw err
                        newStudent.password = hash
                        newStudent.save().then(savedStudent => {
                            req.flash('success_message', 'Now, You are Registered. Please Login')
                            res.redirect('/login')
                        })
                    })
                })
            } else{
                req.flash('error_message', 'Email Already Exist. Please Login')
                res.redirect('/login')
            }
        })
    }
})
module.exports = router