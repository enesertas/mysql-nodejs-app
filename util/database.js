const mysql = require('mysql2');

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'mysql-nodejs-app'
    
});

module.exports = pool.promise();
