/**
 * Created by sammy on 1/21/18.
 */
module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        email: {
            type: DataTypes.STRING,
            unique: true,
            require: true,
            validate: {
                isEmail: true
            }
        },
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        salt: DataTypes.STRING,
        hash: DataTypes.STRING(1500)
    });
    return User;
};
