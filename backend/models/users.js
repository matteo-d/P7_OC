'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init({
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
    }}, {
    sequelize,
    tableName: 'users',
    modelName: 'Users',
  });
  return Users;
};