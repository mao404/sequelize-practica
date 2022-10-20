

function applyExtraSetup(sequelize) {
    const { User, Role, Teacher, Grade, Subject, Student, Group, Evaluation, Term } = sequelize.models;

    Role.hasOne(User, {

    });
    User.belongsTo(Role);

    User.hasOne(Teacher, {
        foreignKey: { allowNull: false }
    })
    Teacher.belongsTo(User);

    //Many to many 
    Teacher.belongsToMany(Subject, { through: 'TeacherSubject'})
    Subject.belongsToMany(Teacher, { through: 'TeacherSubject'})

    //Users to Students
    User.hasOne(Student);

    //Group ForeignKeys
    Grade.hasOne(Group)
    Subject.hasOne(Group)
    Student.hasOne(Group)

    //Evaluation ForeignKeys
    Subject.hasOne(Evaluation)
    Student.hasOne(Evaluation)
    Term.hasOne(Evaluation)
    Grade.hasOne(Evaluation)
}

module.exports = { applyExtraSetup };