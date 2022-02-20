require("dotenv").config();
const tools = require("./tools");

// AJOUTER VERIFICATION SI L'EMAIL N'EST PAS DEJA PRIS 
exports.getUserById = (req, res) => 
{
	console.log("Vous etes a la recherche par id");
	return 0;

}

exports.getAllUsers = (req, res) => 
{
	console.log("Vous recuperez tous les users");
	return 0;

}

exports.createUser = (req, res) => 
{
	console.log("Vous creez un user");
	return 0;

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
