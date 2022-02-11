const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.signup = (req, res) =>
{
    console.log("Signup route");
    if (!req.body.firstname || !req.body.lastname || !req.body.email || !req.body.password)
    {
        return("Missing needed values");
    };  
    console.log(`${req.body.firstname}, ${req.body.lastname}, ${req.body.email}, ${req.body.password},`);

    
};

