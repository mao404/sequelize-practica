const { Sequelize, DataTypes } = require('sequelize');
const { applyExtraSetup } = require('./extraSetup')

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
  });

//check the progress and the outcome of the connection
sequelize.authenticate().then(async() => {
    try {
        await sequelize.authenticate();
        console.log('Connection to the database has been established.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
})

//LOAD UP MODELS
const modelDefiners = [
  require('../models/event'),
  require('../models/role'),
  require('../models/term'),
  require('../models/schoolGrade'),
  require('../models/user'),
  require('../models/teacher'),
  require('../models/subject'),
  require('../models/group'),
  require('../models/student'),
  require('../models/evaluation'),
  //Add more models here..
  //require('./models/item')

]

//Define models according to their files
for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
  
}

//EXECUTE ASSOCIATES AND EXTRA SETUP
applyExtraSetup(sequelize);

//Sync all models at once
sequelize.sync().then(async () => {
  try {
    await sequelize.sync({ alter: true})
    console.log('All models were synchronized successfully')
  } catch (error) {
    console.log(error)
  }
})


module.exports = sequelize