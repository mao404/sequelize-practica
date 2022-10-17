const { Sequelize } = require("sequelize");
const Role = require('./role')


module.exports = (sequelize) => {
    const User = sequelize.define('User', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        idNumber: {
            type: Sequelize.INTEGER(15),
            allowNull: false,
            unique: true
        },
        userName: {
            type: Sequelize.STRING(30),
            allowNull: false
        },
        userName2: {
            type: Sequelize.STRING(30)
        },
        LastName: {
            type: Sequelize.STRING(20),
            allowNull: false
        },
        LastName2: {
            type: Sequelize.STRING(20),
        },
        Telephone: {
            type: Sequelize.INTEGER(10)
        },
        Address: {
            type: Sequelize.STRING(50)
        },
        Email: {
            type: Sequelize.STRING(30),
            isEmail: true
        },
        Password: {
            type: Sequelize.STRING(80),

        }
    })

    return User;
    
};