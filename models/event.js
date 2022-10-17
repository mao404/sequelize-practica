const { Sequelize } = require("sequelize");


module.exports = (sequelize) => {
    const Event = sequelize.define('Event', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        action: {
            type: Sequelize.STRING(20)
        },
        createdAt: {
            type: "DATETIME",
            defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
            allowNull: false  
        }
    })
    return Event;
    
};
