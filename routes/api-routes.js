module.exports = function(app) {


app.post("/api/", function(req, res) {
      //console.log(req.body);
      console.log('success');
      res.json(true);

  });


}