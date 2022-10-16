const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
  });

//check the progress and the outcome of the connection
const check = sequelize.authenticate().then(async() => {
    try {
        await sequelize.authenticate();
        console.log('Connection to the database has been established.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
})

module.exports = sequelize