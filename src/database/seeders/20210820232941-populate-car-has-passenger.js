'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('car_has_passengers', [{
      car_id: 1,
      passenger_id: 1
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('car_has_passengers', null, {});
  }
};
