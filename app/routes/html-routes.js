// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------
  app.get("/personalInfo", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/personalInfo.html"));  
  });

  app.get("/landing", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/landing.html"));
  });

  app.use("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));  
  });

  // If no matching route is found default to home
 // app.get("*", function(req, res) {
   // res.sendFile(path.join(__dirname, "../public/reserve.html"));
 // });

};