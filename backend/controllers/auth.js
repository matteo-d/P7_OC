const bcrypt = require("bcrypt");
require("dotenv").config();
const tools = require("./tools");
const db =  require("../models");
const User = db.User;

// AJOUTER VERIFICATION SI L'EMAIL N'EST PAS DEJA PRIS 
exports.signup =  async (req, res) => {
    let {firstname, lastname, email, password} = req.body;
    if (firstname && lastname && tools.isValidPassword(password) && tools.isValidEmail(email)) 
    {
                password = await bcrypt.hash(password, 10)
                try
                {
                    const user = await User.create({firstname, lastname, email, password})
                    return res.json(user);
                }   
                catch(err)
                {
                    console.log(err);
                    return res.status(500).json(err)
                }            
    }
    else
    {
        res = res.status(500).json
            ({
                message: "Verify firstname, lastname, email, password validity",
            });
        return res;

    }
}

// AJOUTER VERIFICATION SI L'EMAIL N'EST PAS DEJA PRIS 
exports.login =  (req, res) => {
    console.log("Vous etes au login")
    return 0;
}