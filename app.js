const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const db = require('./util/database');
const router = express.Router;

app('view engine', 'ejs');
app('views', 'views');

app.use((req, res, next) => {
    res.render('index');
  });

app.listen(3000);