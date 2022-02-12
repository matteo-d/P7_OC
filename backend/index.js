require('dotenv').config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const cors = require("cors");
const bodyParser = require("body-parser");

//  LAUNCH EXPRESS SERVER
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(express.urlencoded({extended : true} ));
app.unsubscribe(express.json());
app.use(cors());
app.listen(port, () =>
{
    console.log(`Express server started at http://localhost:${port}   :)`);
});

// CORS STUFF WHATEVA
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
});

//  CONNECT TO SQL DB
const db = require("./db_config")

db.connect(function(error){
    if(error)
    { 
        console.log("Error :( Verify DB connection info");
        throw error;
    }
    console.log(`${process.env.DATABASE} database is connected at ${process.env.HOST} user is ${process.env.USE}  :)`);
});

 // ROUTES
 app.get('/', cors(), async (req, res) => { res.send("Express server running");});

 // ROUTES SIGNUP AND LOGIN
userRoutes = require("./routes/user_routes")
app.use("/api/auth", userRoutes);

