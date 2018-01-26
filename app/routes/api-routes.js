// var express = require("express");
// var router = express.Router();

// router.get("/landing", function(req, res) {
//     res.send("you are authenticated!");
// });
// module.exports = router;

// var Users = require("../models");


// module.exports = function(app) {


// app.post("/api/", function(req, res) {
//      // console.log(req.body);
//      //console.log('success');
//       Users.create({

//       email : req.body.userEmail, 
//       firstname : req.body.userFname,
//       lastname : req.body.userLname,
//       user_password : req.body.userPassword,
      
<<<<<<< HEAD
      email : req.body.userEmail, 
      firstname : req.body.userFname,
      lastname : req.body.userLname,
      user_password : req.body.userPassword

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

      app.post("/api/profile", function(req, res) {
        //console.log(req.body);
        //console.log('success');
         Users.update({
         
         firstname : req.body.userFname,
         lastname : req.body.userLname,
         user_password : req.body.userPassword
         },
         {where : {email : req.body.userEmail}
   
         })
         
       });


}
=======

//       });
//       res.json(true);
//     });
//      // res.json(true);
//      // shant

//      app.get("/api/profile/:email", function(req, res) {
//        //console.log("R " + req.params.email);
//         // if (req.params.email) {
//            Users.findAll({
//              where: {
//                email: req.params.email
//              }
//             }).then(function(results) {
//             //console.log('s' + res.json(results));
//             res.json(results);
//          });
//        // }
//       });


// }
>>>>>>> 012a4dff98b26884f9b2c253a96c85429726045c
