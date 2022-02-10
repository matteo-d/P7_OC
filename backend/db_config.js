require('dotenv').config();
const mysql = require("mysql");
const dbConnect = mysql.createConnection({
    host : process.env.HOST,
    // Don't know why USER don't work below so USE
    user : process.env.USE,
    password : process.env.PASSWORD,
    database : process.env.DATABASE
});

dbConnect.connect(function(error){
    if(error)
    { 
        console.log("suckerz");
        throw error;
    }
    console.log("DB Connected :)");
});
module.exports = dbConnect;