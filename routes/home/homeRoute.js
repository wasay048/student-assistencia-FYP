const express = require('express')
const router = express.Router()
// For set the default layout for the home page
router.all('/*', (req, res, next) => {
    req.app.locals.layout = 'home'
    next();
})
// For loading Home Page
router.get('/', (req, res) => {
    res.render("home/index")
})


module.exports = router