const { Sequelize } = require("sequelize");


module.exports = (sequelize) => {
    const Role = sequelize.define('Role', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        roleName: {
            type: Sequelize.STRING(10),
            allowNull: false
        }
    })
    return Role;
    
};