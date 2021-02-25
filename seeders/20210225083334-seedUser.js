'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    //username: DataTypes.STRING,
    // password: DataTypes.STRING,
    // first_name: DataTypes.STRING,
    // last_name: DataTypes.STRING,
    // gender: DataTypes.STRING,
    // email: DataTypes.STRING
   let sample = 
   [
     {
     username : "edward",
     password : "edward",
     first_name : "Edward",
     last_name : "Brainerd",
     gender : "male",
     email : "brein@mail.com",
     createdAt : new Date(),
     updatedAt : new Date()
    },
    {
      username : "abdul",
      password : "abdul",
      first_name : "Abdul",
      last_name : "Majid",
      gender : "male",
      email : "abdul@mail.com",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      username : "mahesa",
      password : "mahe123",
      first_name : "Mahesa",
      last_name : "NurAlamsyah",
      gender : "male",
      email : "mahe33@mail.com",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      username : "abdul",
      password : "mujib13",
      first_name : "Abdul",
      last_name : "Mujib",
      gender : "male",
      email : "mujib20@mail.com",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      username : "boby",
      password : "boby88",
      first_name : "Boby",
      last_name : "Bewa",
      gender : "male",
      email : "boby88@mail.com",
      createdAt : new Date(),
      updatedAt : new Date()
    }
    ]
   return queryInterface.bulkInsert("Users", sample)
  },

  down:  (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Users", null)
  }
};
