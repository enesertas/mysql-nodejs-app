const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const db = require('./util/database');
const routes = require('./routers/routes')

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(routes);

app.listen(3000);