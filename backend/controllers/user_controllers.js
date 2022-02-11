const bcrypt = require("bcrypt");

require("dotenv").config();

const tools = require("./tools")

// SIGNUP
// requete 
// verifier si la requete contient seulement email password
// verifier si password et email bon format et email don't already exist
// bcrypt le mot de passe 
// add a newwuser
// Signup
exports.signup = (req, res) => {
    if (tools.isValidPassword(req.body.password) && tools.isValidEmail(req.body.email)) {
        bcrypt
            .hash(req.body.password, 10)
            .then((hash) => {
                const user = new User({
                    firstname : req.body.firsname,
                    lastname : req.body.lastname,
                    email: req.body.email,
                    password: hash
                });
                // INSERT MYSQL 
                INSERT INTO `users` (`firstname`, `lastname`, `email`, `password`) VALUES ('Paul', 'Marco', 'matteo.lol@gmail.com', 'Password1234&');
            })
            .catch((error) => res.status(500).json({ error }));
    } else {
        res.status(401).json({
            message: "ERROR MDP OR EMAIL",
        });
    }
}
        




const jwt = require("jsonwebtoken");
const TOKEN = process.env.TOKEN;
exports.login = (req, res) =>
{
    console.log("Login  route");
    if (!req.body.email || !req.body.password)
    {
        return("Missing needed values");
    };  
    console.log(` ${req.body.email}, ${req.body.password}`);  
};
    
