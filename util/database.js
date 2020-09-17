const mysql = require('mysql2');
const database = require('../../../Projeler/nodeJS/util/database');
const pool = mysql.createPool({
    host:'localhost',
    database:'mysql-nodejs-app',
    username:'root',
    password:'Qwaszxcv*1'
});

module.exports = pool.promise();