const express = require('express');
const app = express();
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const { mongodbUrl } = require('./config/database');

mongoose.connect(mongodbUrl, { useNewUrlParser: true }).then((db) => {
    console.log("Mongodb is connected");
}).catch(error => console.log(error));