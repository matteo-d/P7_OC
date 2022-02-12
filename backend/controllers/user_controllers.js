const bcrypt = require("bcrypt");
require("dotenv").config();
const db = require("../db_config")

const tools = require("./tools")
// SIGNUP
// requete 
// verifier si la requete contient seulement email password
// verifier si password et email bon format et email don't already exist
// bcrypt le mot de passe 
// add a newwuser
// Signup
exports.signup = (req, res) => {
    console.log("Cant read req :(");
    console.log(req.firstname);
    if (tools.isValidPassword(req.body.password) && tools.isValidEmail(req.body.email)) 
    {
        bcrypt.hash(req.body.password, 10).then((hash) => 
        {
            let sql = `INSERT INTO users (firstname, lastname, email, password) VALUES (${req.body.firstname}, ${req.body.lastname}, ${req.body.email}, ${hash})`;
            db.query(sql, function (err, result) {
              if (err) throw err;
              console.log("1 record inserted");
            });
          
        });
    }
    else 
    {
        res.status(401).json
        ({
            message: "ERROR MDP OR EMAIL",
        });
    };
};
        




const jwt = require("jsonwebtoken");
const dbConnect = require("../db_config");
const TOKEN = process.env.TOKEN;
exports.login = (req, res) =>
{
    console.log("Login  route");
    if (!req.body.email || !req.body.password)
    {
        return("Missing needed values");
    };  
    console.log(` ${req.body.email}, ${req.body.password}`);  
}
