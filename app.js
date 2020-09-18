const path = require('path');

const express = require('express');
const db = require('./util/database');
const routes = require('./routers/routes')
const bodyParser = require('body-parser');
const app = express();



app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(routes);

app.listen(3000);