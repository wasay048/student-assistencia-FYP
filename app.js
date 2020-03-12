const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const { mongodbUrl } = require('./config/database');
const http = require('http');
const server = http.Server(app);
const PORT = process.env.PORT || 3000;
mongoose.connect(mongodbUrl, { useNewUrlParser: true }).then((db) => {
    console.log("Mongodb is connected");
}).catch(error => console.log(error));
app.get('/contact', (req, res) => {
    res.send("It is working fine.");
})
server.listen(PORT, () => {
    console.log("Port is working PORT} ");
})
// app.listen(3000, () => {
//     console.log("Listening at port 3000");
// });