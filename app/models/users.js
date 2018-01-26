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


// Dependencies
// =============================================================
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");
// Creates a "Users" model that matches up with DB
var Users = sequelize.define("users", {
  //userid: {
  //  type: Sequelize.STRING,
  //  primaryKey : true 
  //},
  email: {
    type: Sequelize.STRING,
    primaryKey : true
  }, 
  firstname: {
    type: Sequelize.STRING
  },
  lastname: {
    type: Sequelize.STRING
  },
  user_password: {
    type: Sequelize.STRING
  },
  dob: {
    type: Sequelize.DATE
  }

});
// Syncs with DB
Users.sync();
// Makes the UUsers Model available for other files
module.exports = Users;