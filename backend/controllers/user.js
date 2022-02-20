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
		const users = await User.findAll({});
		return res.status(200).send({users});
	}
	catch(error)
	{
		return res.status(500).send({ error: err });
	}
}

exports.getAllUsers = async (req, res) => 
{
	try
	{
		const users = await User.findAll({});
		return res.status(200).send({users});
	}
	catch(error)
	{
		return res.status(500).send({ error: err });
	}
}


exports.modifyUser = (req, res) => 
{
	console.log("Vous modifiez un User");
	return 0;

}

exports.deleteUser = (req, res) => 
{
	console.log("Delete Un user");
	return 0;
}
