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
      let sample = 
      [
        {
          "name": "Among Us",
          "genre": "kasual",
          "release_year": "2018",
          "rating": 9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
         "name": "Ghensin Impact",
         "genre": "adventure",
         "release_year": "2020",
         "rating": 8,
         createdAt : new Date(),
         updatedAt : new Date()
       },
       {
         "name": "CyberPunk2077",
         "genre": "Open World",
         "release_year": "2020",
         "rating": 6,
         createdAt : new Date(),
         updatedAt : new Date()
       },
       {
         "name": "Dota 2",
         "genre": "Multiplayer Onlie",
         "release_year": "2013",
         "rating": 5,
         createdAt : new Date(),
         updatedAt : new Date()
       },
       {
         "name": "Pokemon Go",
         "genre": "RPG",
         "release_year": "2016",
         "rating": 3,
         createdAt : new Date(),
         updatedAt : new Date()
       }
      ]


   return queryInterface.bulkInsert("Games", sample)
  },

  down:  (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Games", null)
  }
};
