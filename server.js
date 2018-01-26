// Dependencies
// ===========================================================
var express = require("express");
var bodyParser = require('body-parser');
var path = require('path');
var exphbs = require("express-handlebars");
var models = require("./app/models");
var morgan = require('morgan');
var authRoutes = require("./app/routes/auth.routes.js");
var apiRoutes = require("./app/routes/api.routes");
var jwt = require("express-jwt");


var app = express();
var PORT = process.env.PORT || 8080;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// set up logger
app.use(morgan('dev'));

//set up view engine
app.engine('handlebars', exphbs({defaultLayout: 'main',
layoutsDir: __dirname + '/views/layouts'}));
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');

// SET UP ENV
var port = process.env.PORT || 3000;
var isDev = process.env.NODE_ENV === 'development';


//Static directory to be served
app.use(express.static("./app/public"));

app.get("/", function(req,res) {
    res.render("index");
});

app.use("/auth", authRoutes);

var auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload'
});
app.use(auth);

app.use("/api", apiRoutes);

// ================================================================================
// ROUTES
// The below points our server to a series of "route" files.
// ================================================================================
require("./app/routes/api-routes.js")(app);
require("./app/routes/html-routes.js")(app);



// SYNC AND START SERVERS
models.sequelize.sync({force: isDev})
.then(function() {
    app.listen(port, function() {
        console.log("listening on port: " + port);
    });
})
.catch(function(err) {
    console.error(err);
    throw err;
});
module.exports = app;
