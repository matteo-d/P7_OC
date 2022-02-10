require('dotenv').config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const cors = require("cors");
const userRoute = require("./routes/userRoutes");

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
    host : 'localhost',
    user : 'matt',
    password : 'password',
    database : "groupomania"
});

dbConnect.connect(function(error){
    if(error)
    { 
        console.log("suckerz");
        throw error;
    }
    console.log("DB Connected :)");
});
