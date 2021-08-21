const { Model, DataTypes } = require('sequelize')

class Driver extends Model{
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            car_id: DataTypes.INTEGER
        },{sequelize})
    }
    static associate(models) {
        this.belongsTo(models.Car, {foreignKey: 'car_id', as: 'car'})
    }
}

module.exports = Driver