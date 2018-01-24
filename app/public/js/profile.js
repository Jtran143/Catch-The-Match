 // When user hits get btn
 $("#getbtn").on("click", function(event) {
    event.preventDefault();
    
    var email = "shant_wanes@yahoo.com"
// Make an AJAX get request to our api, including the user's book in the url
   var currentURL = window.location.origin;

   $.get(currentURL + "/api/profile/" + email, function(data) {
        
       //console.log(currentURL + "/api/profile/" + email);
       console.log(data);
      renderUsers(data);
    // });
  });

 });

  function renderUsers(data) {
    if (data.length !== 0) {
      $("#test").empty();
      $("#test").show();
      $("#first_name").val(data[0].firstname);
      $("#last_name").val(data[0].lastname);
      $("#email").val(data[0].email);
      $("#dob").val(data[0].dob);
    //   for (var i = 0; i < data.length; i++) {
    //     var div = $("<div>");
        
    //     div.append("<h2>" + data[i].email + "</h2>");
    //     div.append("<p>Name: " + data[i].firstname + "</p>");
    //     div.append("<p>Lastname: " + data[i].lastname + "</p>");
    //     div.append("<p>Password: " + data[i].user_password + "</p>");
    //     //div.append("<button class='delete' data-id='" + data[i].id + "'>DELETE BOOK</button>");
    //     $("#test").append(div);
    //   }
    }
 };

//   $.get("/api/profile", function(data) {   
//         console.log(data);
//   });

 