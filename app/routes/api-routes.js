
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

     // res.json(true);

  });


}