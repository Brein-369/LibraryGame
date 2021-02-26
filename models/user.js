'use strict';
const { Model } = require('sequelize');
const { genPassword } = require('../helpers/bcrypt')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Game, {through : models.UserGame})
    }
    
    gamersName(){
      return `gamers ${this.first_name}`
    }

  };
  User.init({
    username: {
      type : DataTypes.STRING,
      validate : {
        isAlphanumeric : {
          args : true,
          msg : "username should not be alphanumeric"
        }
      }
    }, 
    password: {
      type : DataTypes.STRING,
      validate : {
        isAlphanumeric : {
          args : true,
          msg : "password should not be alphanumeric"
        }
      }
    }, 
    first_name: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true,
          msg : "first name should not be empty"
        }
      }
    }, 
    last_name: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true,
          msg : "last name should not be empty"
        }
      }
    }, 
    gender: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true,
          msg : "gender should not be empty"
        }
      }
    }, 
    email: {
      type : DataTypes.STRING,
      validate : {
        isEmail : {
          args : true,
          msg : "thats not email format"
        }
      }
    }, 
    full_name : DataTypes.STRING,
    status : DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    beforeCreate: (instance) => {
      instance.password = genPassword(instance.password)
    }
  });
  User.beforeCreate((instance,options)=>{
    instance.full_name = `${instance.first_name} ${instance.last_name}`
    instance.status = "user"
  })


  

  return User;
};