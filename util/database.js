const USER = ''; // Fill here
const PASSWORD = ''; // Fill here
const DATABASE = ''; // Fill here
const mysql = require('mysql2');

const pool = mysql.createPool({
    host:'localhost',
    user: USER,
    password:PASSWORD,
    database: DATABASE
    
});

module.exports = pool.promise();
