const { Sequelize } = require("sequelize");


module.exports = (sequelize) => {
    const Term = sequelize.define('Term', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        termName: {
            type: Sequelize.STRING(20),
            allowNull: false
        }
    })
    return Term;
    
};