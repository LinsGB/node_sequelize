const { Model, DataTypes } = require('sequelize')

class CarHasPassenger extends Model {
    static init(sequelize) {
        super.init({
            car_id: DataTypes.INTEGER,
            passenger_id: DataTypes.INTEGER
        }, {
            sequelize
        })
    }
}

module.exports = CarHasPassenger