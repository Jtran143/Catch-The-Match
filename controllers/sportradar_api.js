var apiURL= "http://api.sportradar.us/nba/trial/v4/en/games/2018/01/20/schedule.json?api_key=zr76svr2gxydq944hw76egjt"
var apiData = document.querySelector(".data-dump");

// running axios to perfrom http request to get data from response object
function getSportData() {
    axios.get(apiURL)
    .then(function (response) {
        apiData.innerHTML = response
    })
    .catch(function (error) {
        apiData.innerHTML = "(An error has occured.)";
    });
}

