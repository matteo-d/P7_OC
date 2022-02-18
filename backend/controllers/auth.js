const bcrypt = require("bcrypt");
require("dotenv").config();
const tools = require("./tools");
const mysql = require("mysql2/promise");
const { sequelize } = require("../models");

// AJOUTER VERIFICATION SI L'EMAIL N'EST PAS DEJA PRIS 
exports.signup =  async (req, res) => {
    const {firstname, lastname, password, email} = req.body
    if (firstname && lastname && tools.isValidPassword(password) && tools.isValidEmail(email)) 
    {
                hashedPassword = await bcrypt.hash(password, 10)
                try
                {
                    const user = await User.create({firstname, lastname, hashedPassword, email})
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
                message: "Verify firsntame, lastname, email, password validity",
            });
        return res;

    }
    return res;
}
