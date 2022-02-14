const bcrypt = require("bcrypt");
require("dotenv").config();
const db = require("../db_config");
const tools = require("./tools");


//  CONNECT TO SQL DB
const mysql = require("mysql2/promise");
const queryDB = async (SQLquery) =>
{
    try
    {
        const con = await mysql.createConnection
        ({
            host : process.env.HOST,
            user : process.env.USE,
            port :process.env.DB_PORT,
            password : process.env.PASSWORD,
            database : process.env.DATABASE
        });
        const result = await con.query(SQLquery);
        
        console.log(result)
        return result;
    }
    catch(err)
    {
        console.log(err);
        res = res.status(500).json
            ({
                message: "Error connection to DB",
            });
        return res;
    }
}
// AJOUTER VERIFICATION SI L'EMAIL N'EST PAS DEJA PRIS 
exports.signup = async (req, res) => {
    if (req.body.firstname && req.body.lastname && tools.isValidPassword(req.body.password) && tools.isValidEmail(req.body.email)) 
    {
        // REQUETE PEU EFFECTIVE CAR PARCOURS TOUTE LA DB 
     
    
        queryDB(`SELECT EXISTS(SELECT 1 FROM users WHERE email = '${req.body.email}');`);

            {
                bcrypt.hash(req.body.password, 10).then((hash) => 
                {
                    queryDB(`INSERT INTO users (firstname, lastname, email, password) 
                    VALUES ('${req.body.firstname}', '${req.body.lastname}', '${req.body.email}', '${hash}')`)       
                });
                res = res.status(200).json
                ({
                    message: "Signed Up ",
                });
                return res;
            }
    }
    else
    {
        res = res.status(500).json
            ({
                message: "Verify firsntame, lastname, email, password validity",
            });
        return res;

    }
    return res;
}


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
