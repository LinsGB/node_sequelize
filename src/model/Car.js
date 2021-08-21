const { Model, DataTypes } = require('sequelize')

class Car extends Model {
    static init(sequelize) {
        super.init({
            color: DataTypes.STRING,
            model: DataTypes.STRING
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.belongsToMany(models.Car, {foreignKey: 'car_id', through: 'car_has_passengers', as: 'passenger'})
    }
}

module.exports = Car