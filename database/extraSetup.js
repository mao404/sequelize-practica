

function applyExtraSetup(sequelize) {
    const { User, Role } = sequelize.models;

    Role.hasOne(User);
    User.belongsTo(Role);

}

module.exports = { applyExtraSetup };