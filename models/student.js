const { Sequelize } = require("sequelize");


module.exports = (sequelize) => {
    const Student = sequelize.define('Student', {
        Payment: {
            type: Sequelize.STRING(2),
            allowNull: false
        },
        BirthDay: {
            type: Sequelize.DATE,
            allowNull: false
        },
        Genre: {
            type: Sequelize.STRING(1),
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
    return Student;
    
};