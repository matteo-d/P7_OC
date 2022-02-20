const bcrypt = require("bcrypt");
require("dotenv").config();
const TOKEN = process.env.TOKEN;
const tools = require("./tools");
const jwt = require("jsonwebtoken");
const db =  require("../models");
const User = db.User;

// AJOUTER VERIFICATION SI L'EMAIL N'EST PAS DEJA PRIS 
exports.signup =  async (req, res) => {
    let {firstname, lastname, email, password} = req.body;
    if (firstname && lastname && tools.isValidPassword(password) && tools.isValidEmail(email)) 
    {
        password = await bcrypt.hash(password, 10);
        try
        {
            const user = await User.create({firstname, lastname, email, password});
            return res.json(user);
        }   
        catch(err)
        {
            return res.status(500).send({ error: err });
        }            
    }
    {
        return res.status(500).send({ error: "Verify request body" });
    }
}

exports.login = async (req, res) => {
    let { email, password } = req.body;
    try 
    {
        const user = await db.User.findOne
        ({
            where: { email: email },
        });
        if (!user)
        {
            return res.status(403).send({ error: "Can't find User, verify email" });
        }
        valid = await bcrypt.compare(password, user.password)
        if (!valid) 
        {
            return res.status(401).send({ error: "Password not valid" });
        }
        res.status(200).json
        ({
            userId: user.id,
            token: jwt.sign({ userId: user._id }, `${TOKEN}`,
            {
                expiresIn: "24h",
            }),
        });
    } 
    catch (error) 
    {
        return res.status(500).send({ error: "Erreur serveur", error : error });
    }
  };