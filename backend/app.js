const { sequelize } = require("./models");
require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

//  LAUNCH EXPRESS SERVER
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(express.urlencoded({extended : true} ));
app.unsubscribe(express.json());
app.use(cors());

app.listen(process.env.PORT, async () =>
{
    console.log(`Express server started at http://localhost:${process.env.PORT}   :)`);
    await sequelize.sync({force : false});
    console.log(`DB Connected   :)`);
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


 // ROUTES
 app.get('/', cors(), async (req, res) => { res.send("Express server running");});

 // ROUTES SIGNUP AND LOGIN
authRoutes = require("./routes/auth");
userRoutes = require("./routes/user");
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

