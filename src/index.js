const express = require('express')
const dotenv = require('dotenv')
const routes = require('./routes/index')
require('./database')

dotenv.config()

const app = express()
app.use(express.json())
routes.forEach(route => {
    app.use(route) 
});

app.listen(3333, () => console.log("API SEQUELIZE NODE on port 3333"));