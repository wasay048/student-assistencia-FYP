const express = require('express');
const app = express();
const path = require('path')
// const router = express.Router();
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const { mongodbUrl } = require('./config/database');
const http = require('http');
const server = http.Server(app);
const PORT = process.env.PORT || 3000;
mongoose.connect(mongodbUrl, { useNewUrlParser: true }).then((db) => {
    console.log("Mongodb is connected");
}).catch(error => console.log(error));

app.use(express.static(path.join(__dirname, 'public')))

app.engine('handlebars', exphbs({ defaultLayout: 'home' }))

app.set('view engine', 'handlebars')



const homeRoute = require('./routes/home/homeRoute')
const adminRoute = require('./routes/admin/adminRoute')
app.use('/', homeRoute)
app.use('/admin', adminRoute)
// app.get('/', (req, res) => {
//     res.render('layouts/home')
// })
server.listen(PORT, () => {
    console.log(`localhost working at ${PORT}`)
})
// app.listen(3000, () => {
//     console.log("Listening at port 3000");
// });