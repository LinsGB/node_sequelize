const Crood = require('../utils/Crood')
const CarModel = require('../model').Car

class Car {
    crood = new Crood(CarModel)
}

module.exports = Car