const { Sequelize } = require("sequelize");


module.exports = (sequelize) => {
    const Grade = sequelize.define('Grade', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        gradeName: {
            type: Sequelize.STRING(3),
            allowNull: false,
            validate: {
                //Names of at least 3 and only use letters, numbers and underscores.
                is: /^\w{3,}$/
            }
        }
    })
    return Grade;
    
};