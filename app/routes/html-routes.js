// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");

var express = require("express");
var router = express.Router();
// ===============================================================================
// ROUTING
// ===============================================================================

  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------
  router.get("/profile", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/profile_page.html"));  
  });

  router.get("/landing", function(req, res) {
    console.log('req', req);
    res.sendFile(path.join(__dirname, "../public/landing_page.html"));
  });

  router.use("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index_main.html"));  
  });

  // If no matching route is found default to home
 router.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index_main.html"));
  });

  

module.exports = router;