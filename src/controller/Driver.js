const Crood = require('../utils/Crood')
const DriverModel = require('../model').Driver

class Driver {
    crood = new Crood(DriverModel)
    list = async (req, res) => {
        try {
            const drivers = await this.crood.list()
            return res.json(drivers)   
        } catch (error) {
            return res.status(500).json({error})
        }
    }
}

module.exports = Driver