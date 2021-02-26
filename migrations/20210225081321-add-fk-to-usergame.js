'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.addConstraint("UserGames", {
      fields : ["UserId"],
      type : "foreign Key",
      name : "UserId_fkey",
      references : {
        table : "Users",
        field : "id"
      },
      onUpdate : "cascade",
      onDelete : "cascade"
    })
    .then(()=>{
      return queryInterface.addConstraint("UserGames", {
        fields : ["GameId"],
        type : "foreign Key",
        name : "GameId_fkey",
        references : {
          table : "Games",
          field : "id"
        },
        onUpdate : "cascade",
        onDelete : "cascade"
      })
    })
    .catch(err=>{
      console.log(err);
    })
  },

  down:  (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.removeConstraint("UserGames", "UserId_fkey")
    .then(()=>{
      return queryInterface.removeConstraint("UserGames", "GameId_fkey")
    })
    .catch(err=>{
      console.log(err);
    })
  }
};
