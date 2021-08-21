const { Model, DataTypes } = require('sequelize');

class Passenger extends Model{
    static init(sequelize) {
        super.init(
            {name: DataTypes.STRING},
            {sequelize})
    }
    static associate(models) {
        this.belongsToMany(models.Passenger, {foreignKey: 'passenger_id', through: 'car_has_passengers', as: 'passenger'})
    }
}

module.exports = Passenger