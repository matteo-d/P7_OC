require('dotenv').config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const cors = require("cors");

app.use(express.urlencoded({extended : true} ));
app.unsubscribe(express.json());
app.use(cors());
app.listen(port, () =>
{
    console.log(`Express server started at http://localhost:${port}   :)`);
});
app.get('/', cors(), async (req, res) => { res.send("Express server running");});

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
        console.log("sucker");
        throw error;
    }
    console.log("DB Connected :)");
});
