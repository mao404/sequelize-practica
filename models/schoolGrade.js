const { Sequelize } = require("sequelize");


module.exports = (sequelize) => {
    const SchoolGrade = sequelize.define('Grade', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        gradeName: {
            type: Sequelize.STRING(3),
            allowNull: false
        }
    })
    return SchoolGrade;
    
};