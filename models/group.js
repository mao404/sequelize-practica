const { Sequelize } = require("sequelize");


module.exports = (sequelize) => {
    const Group = sequelize.define('Group', {
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
    return Group;
    
};