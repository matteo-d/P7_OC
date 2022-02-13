const bcrypt = require("bcrypt");
require("dotenv").config();
const db = require("../db_config");
const tools = require("./tools");
// AJOUTER VERIFICATION SI L'EMAIL N'EST PAS DEJA PRIS 
exports.signup = (req, res) => {
    if (req.body.firstname && req.body.lastname && tools.isValidPassword(req.body.password) && tools.isValidEmail(req.body.email)) 
    {
        bcrypt.hash(req.body.password, 10).then((hash) => 
        {
            db.query(`INSERT INTO users (firstname, lastname, email, password) 
            VALUES ('${req.body.firstname}', '${req.body.lastname}', '${req.body.email}', '${hash}')`,
            (err, result) => 
            {
                if (err)
                {
                    res.status(401).json
                    ({
                        message: "Not authorized",
                        result: result
                    });
                };
                {
                    res.status(200).json
                    ({
                        message: "User registered :)",
                        result: result
                    });
                };
            });
        });
       
    }
    else 
    {
        res.status(401).json
        ({
            message: "Not authorized",
        });
    };
};

exports.login = (req, res) => {
    
    const isValidemail = (email) =>
    {
    db.query(`SELECT email FROM users WHERE email = '${email}'`,
    (err, result) => 
    {
        if (err)
        {
            res.status(500).json
            ({
                message: "DB issue",
                result: result
            });
        }
        else if (result.length === 0)
        {
            return res.status(401).json
            ({
                error: "User not found",
            });
        }
        else if (result.length > 0)
        {  
            return res.status(200).json
            ({
                message: "User find",
            });
        }
    });
    }
    isValidemail(req.body.email);
}
