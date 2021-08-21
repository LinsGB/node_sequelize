const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const { Passenger,Driver,Car,CarHasPassenger } = require('../model')

const connection = new Sequelize(dbConfig)

const models = [Passenger,Driver,Car,CarHasPassenger]

models.forEach(model => {
    model.init(connection);
});

Driver.associate(connection.models)
Car.associate(connection.models)
Passenger.associate(connection.models)

module.exports = connection