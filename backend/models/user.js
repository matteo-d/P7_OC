module.exports = (sequelize, DataTypes) =>
{
  const User = sequelize.define("user", 
  {
    firstname: 
    {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: 
    {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: 
    {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: 
    {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bio: 
    {
      type: DataTypes.STRING,
      allowNull: true,
    },
    pic: 
    {
      type: DataTypes.BLOB,
      allowNull: true,
    }
  })
  return User;
}
