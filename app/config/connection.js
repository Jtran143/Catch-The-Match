// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************
// Dependencies
var Sequelize = require("sequelize");
// Creates mySQL connection using Sequelize
var sequelize = new Sequelize("sports_db", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  port : 3307,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});
// Exports the connection for other files to use
module.exports = sequelize;