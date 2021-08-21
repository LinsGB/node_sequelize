'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('drivers', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: Sequelize.STRING,
      car_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'cars', key: 'id'},
        onUpdate: 'CASCADE',
        ondDelete: 'SET NULL'
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('drivers');
  }
};
