/*let dbConnect = require("../db_config")

const   User = (user) => 
{
    this.firstname = user.firstname,
    this.lastname = user.lastname,
    this.bio = user.bio,
    this.picture = user.picture
}

User.getAllUsers = (response) =>
{
    dbConnect.query("SELECT * FROM users", (err, res) =>{
    if (err)
    {
        console.log("ERROR with fetch data of users", err);
        response(null, err);
    }
    else
    {
        console.log("SUCCESS with fetch data")
        response(null, res);
    }
});
};

module.exports = User;*/