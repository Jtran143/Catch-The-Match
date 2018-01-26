require('dotenv').config();
// Dependencies
// ===========================================================
var express = require("express");
var bodyParser = require('body-parser');
var path = require('path');
var models = require("./models");
var authRoutes = require("./app/routes/auth.routes");
var viewRouter = require("./app/routes/html-routes");
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Static directory to be served
app.use(express.static("./app/public"));

// ================================================================================
// ROUTES
// The below points our server to a series of "route" files.
// ================================================================================



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(express.static('app/public'));

app.use("/auth", authRoutes);
app.use("/", viewRouter)
var isDev = process.env.NODE_ENV === 'development';

// Listener
// ===========================================================
<<<<<<< HEAD
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

  
=======
models.sequelize.sync({force: false})
.then(function() {
    app.listen(PORT, function() {
        console.log("listening on port: " + PORT);
    });
})
.catch(function(err) {
    console.error(err);
    throw err;
});
>>>>>>> 2115f00465f778868f7005b2b991bbe188f2568a
