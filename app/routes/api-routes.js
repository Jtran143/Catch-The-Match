
var Users = require("../models/users.js");

module.exports = function(app) {


app.post("/api/", function(req, res) {
      //console.log(req.body);
     // console.log('success');
      Users.create({
      
      email : req.body.email,
      firstname : req.body.firstname,
      lastname : req.body.lastname,
      date_stamp : req.body.date_stamp

      })
     // res.json(true);

  });


}