'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cars', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      color: Sequelize.STRING,
      model: Sequelize.STRING,
    });
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('cars');
  }
};
