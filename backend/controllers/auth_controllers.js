const bcrypt = require("bcrypt");
require("dotenv").config();
const db = require("../db_config");
const tools = require("./tools");
// SIGNUP
// requete 
// verifier si la requete contient seulement email password
// verifier si password et email bon format et email don't already exist
// bcrypt le mot de passe 
// add a newwuser
// Signup
exports.signup = (req, res) => {
    
    if (tools.isValidPassword(req.body.password) && tools.isValidEmail(req.body.email) && req.body.firstname && req.body.lastname) 
    {
        console.log("TEST PASSED");
        bcrypt.hash(req.body.password, 10).then((hash) => 
        {
            db.query(`INSERT INTO users (firstname, lastname, email, password) VALUES ('${req.body.firstname}', '${req.body.lastname}', '${req.body.email}', '${hash}')`,  (err, result) => {
                if(err) throw err;
                console.log('Data received from Db:');
                console.log(result);
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
        
