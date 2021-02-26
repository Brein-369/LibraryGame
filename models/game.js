'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Game.belongsToMany(models.User, {through : models.UserGame})
    }
  };
  Game.init({
    name: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true,
          msg : "game should not be empty"
        }
      }
    }, 
    genre: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true,
          msg : "genre should not be empty"
        }
      }
    }, 
    release_year: DataTypes.STRING,
    rating: {
      type : DataTypes.STRING,
      validate : {
        len : {
          args : [1,10],
          msg : "please fill rating between 1 - 10"
        }
      }
    }, 
  }, {
    sequelize,
    modelName: 'Game',
  });
  return Game;
};