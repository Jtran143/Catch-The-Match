// Include the request npm package (Don't forget to run "npm install request" in this folder first!)
var request = require("request");
// Then run a request to the OMDB API with the movie specified
request("http://api.sportradar.us/nba/trial/v4/en/games/2018/01/20/schedule.json?api_key=zr76svr2gxydq944hw76egjt", function(error, response, body) {
  // If the request is successful (i.e. if the response status code is 200)
  if (!error && response.statusCode === 200) {
    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log(body);
  }
});