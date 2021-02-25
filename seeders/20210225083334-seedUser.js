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
