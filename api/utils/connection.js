const mysql = require('mysql2');

const con = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'MaNpReEt#@',
    database : 'circlify'
})

module.exports = {con};