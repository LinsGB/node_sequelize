const { Router } = require('express')
const routes = Router()
const {Car} = require('../service')

routes.get('/car', async (req, res) =>{

    res.json({cars})
    
})

module.exports = routes