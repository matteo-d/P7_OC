const bcrypt = require("bcrypt");
require("dotenv").config();
const TOKEN = process.env.TOKEN;
const tools = require("./tools");
const jwt = require("jsonwebtoken");
const db =  require("../models");

const User = db.User;

// AJOUTER VERIFICATION SI L'EMAIL N'EST PAS DEJA PRIS 
exports.getUserById = async (req, res) => 
{
	try 
	{
        const user = await 	User.findAll
		({
			where : {
			  id : req.params.id
			}
		});
		return res.status(200).send({ user });
    }
	catch(err) 
	{
		return res.status(500).send({ error: err });
    };
};

exports.getAllUsers = async (req, res) => 
{
	try
	{
		const users = await User.findAll({});
		return res.status(200).send({data : users});
	}
	catch(error)
	{
		return res.status(500).send({ error: err });
	}
}


exports.modifyUser = async (req, res) => 
{
	try
	{
		const userObject = req.file
		? 
		{
			...JSON.parse(req.body.user),
			imageUrl: `${req.protocol}://${req.get('host')}/public/${req.file.filename}`
		}
		:
		{
			  ...req.body 
		}
		await User.update((userObject), {where: {id : req.params.id}});
	}
	catch(err)
	{
		return res.status(500).send({ error: err });
	}
}

exports.deleteUser = async (req, res) => 
{
	let id = req.params.id
    
    await User.destroy({ where: { id: id }} )

    res.status(200).send('User is deleted !')
}
