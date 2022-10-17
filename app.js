const dotenv = require('dotenv')

//Set enviorment variables
dotenv.config({path: './env/.env'}) 

//Require database
const sequelize = require('./database/db')
