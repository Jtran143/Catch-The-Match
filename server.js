// Dependencies
// ===========================================================
var express = require("express");
var bodyParser = require('body-parser');
var path = require('path');

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
require("./app/routes/api-routes.js")(app);
require("./app/routes/html-routes.js")(app);


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


// Listener
// ===========================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });