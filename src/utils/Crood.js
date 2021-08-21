class Crood {
    constructor(model) {
        this.model = model
    }
    list = () => {
        return this.model.findAll();
    }
    get = (id) => {
        return this.model.findOne({where:{id}})
    }
    delete = (id) => {
        return this.model.delete({where:{id}})
    }
    update = (id, values) => {
        return this.model.update(values,{where:{id}})
    }
    create = (values) => {
        return this.model.create(values)
    }
}

module.exports = Crood