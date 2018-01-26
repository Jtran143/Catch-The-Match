var express = require("express");
var router = express.Router();

router.get("/landing", function(req, res) {
    res.send("you are authenticated!");
});
module.exports = router;

var Users = require("../models/users.js");


module.exports = function(app) {


app.post("/api/", function(req, res) {
     // console.log(req.body);
     //console.log('success');
      Users.create({
      
      email : req.body.userEmail, 
      firstname : req.body.userFname,
      lastname : req.body.userLname,
      user_password : req.body.userPassword,
      

      });
      res.json(true);
    });
     // res.json(true);
     // shant

     app.get("/api/profile/:email", function(req, res) {
       //console.log("R " + req.params.email);
        // if (req.params.email) {
           Users.findAll({
             where: {
               email: req.params.email
             }
            }).then(function(results) {
            //console.log('s' + res.json(results));
            res.json(results);
         });
       // }
      });


}