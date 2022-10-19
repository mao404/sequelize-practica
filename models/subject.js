const { Sequelize } = require("sequelize");


module.exports = (sequelize) => {
    const Subject = sequelize.define('Subject', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        subjectName: {
            type: Sequelize.STRING(20),
            unique: true,
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
    return Subject;
    
};