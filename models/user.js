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
        firstName: {
            type: Sequelize.STRING(30),
            allowNull: false
        },
        secondName: {
            type: Sequelize.STRING(30)
        },
        LastName: {
            type: Sequelize.STRING(20),
            allowNull: false
        },
        LastName2: {
            type: Sequelize.STRING(20),
            allowNull: false
        },
        Telephone: {
            type: Sequelize.INTEGER(10),
            allowNull: false
        },
        Address: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        Email: {
            type: Sequelize.STRING(30),
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        Password: {
            type: Sequelize.STRING(80),
            allowNull: false

        },
        createdAt: {
            type: "TIMESTAMP",
            defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
            allowNull: false  
        },
        updatedAt: {
            type: "DATETIME",
            defaultValue: sequelize.literal("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"),
            allowNull: false
        }
    })

    return User;
    
};