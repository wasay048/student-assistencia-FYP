const express = require('express');
const app = express();
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const { mongodbUrl } = require('./config/database');
const http = require('http');
const server = http.Server(app);
const session = require('express-session')
const flash = require('connect-flash')
var cookieParser = require('cookie-parser')

const PORT = process.env.PORT || 3000;
mongoose.connect(mongodbUrl, { useNewUrlParser: true, useUnifiedTopology: true }).then((db) => {
    console.log("Mongodb is connected");
}).catch(error => console.log(error));

app.use(express.static(path.join(__dirname, 'public')))

app.engine('handlebars', exphbs({ defaultLayout: 'home' }))

app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
// sessions middleware
// Sessions
app.use(cookieParser())
app.use(session({
  secret: 'edwindiazIlovecodeing',
  resave: true,
  saveUninitialized: true
}))
// for flash messages
app.use(flash())
app.use((req, res, next) => {
    res.locals.student = req.student || null
    res.locals.success_message = req.flash('success_message')
    res.locals.error_message = req.flash('error_message')
    res.locals.error = req.flash('error')
    next()
  })
// assigning routes to each page
const homeRoute = require('./routes/home/homeRoute')
const adminRoute = require('./routes/admin/adminRoute')
const registerRoute = require('./routes/home/registerUser')
app.use('/', homeRoute)
app.use('/admin', adminRoute)
app.use('/register', registerRoute)
// app.get('/', (req, res) => {
//     res.render('layouts/home')
// })
server.listen(PORT, () => {
    console.log(`localhost working at ${PORT}`)
})
// app.listen(3000, () => {
//     console.log("Listening at port 3000");
// });