const { Sequelize } = require("sequelize");


module.exports = (sequelize) => {
    const Evaluation = sequelize.define('Evaluation', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        eva1: {
            type: Sequelize.FLOAT(2)
        },
        eva2: {
            type: Sequelize.FLOAT(2)
        },
        eva3: {
            type: Sequelize.FLOAT(2)
        },
        eva4: {
            type: Sequelize.FLOAT(2)
        },
        eva5: {
            type: Sequelize.FLOAT(2)
        },
        eva6: {
            type: Sequelize.FLOAT(2)
        },
        eva7: {
            type: Sequelize.FLOAT(2)
        },
        eva8: {
            type: Sequelize.FLOAT(2)
        },
        eva9: {
            type: Sequelize.FLOAT(2)
        },
        eva10: {
            type: Sequelize.FLOAT(2)
        },
        average: {
            type: Sequelize.FLOAT(2)
        },
        createdAt: {
            type: "DATETIME",
            defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
            allowNull: false  
        },
        updatedAt: {
            type: "DATETIME",
            defaultValue: sequelize.literal("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"),
            allowNull: false
        }
    })
    return Evaluation;
    
};
