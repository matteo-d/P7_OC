require('dotenv').config();
const mysql = require("mysql");
const db = mysql.createConnection({
    host : process.env.HOST,
    // Don't know why USER don't work below so USE as environnement variable
    user : process.env.USE,
    password : process.env.PASSWORD,
    database : process.env.DATABASE
});

module.exports = db;