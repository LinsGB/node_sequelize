'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('car_has_passengers', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      car_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'cars', key: 'id'},
        onUpdate: 'CASCADE',
        ondDelete: 'SET NULL'
      },
      passenger_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'passengers', key: 'id'},
        onUpdate: 'CASCADE',
        ondDelete: 'SET NULL'
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('car-has-passengers');
  }
};
