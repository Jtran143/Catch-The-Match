  // In this code below we create the Front-end JavaScript which "POSTS" our form data to our express server.
  // In essence, when the user hits submit, jQuery grabs all of the fields then sends a post request to our api
  $(".submit").on("click", function(event) {
    event.preventDefault();
if ($("#password").val().trim() === $("#cpassword").val().trim()) {
    // Here we grab the form elements
    var newUser = {
      userFname: $("#fname").val().trim(),
      userLname: $("#lname").val().trim(),
      userEmail: $("#email").val().trim(),
      userPassword: $("#password").val().trim()
    };
    //console.log(newUser);

    

      var currentURL = window.location.origin;
      $.post(currentURL + "/api/", newUser,
          function(data) {
            //console.log('111');
            // Clear the form when submitting
            $("#fname").val("");
            $("#lname").val("");
            $("#email").val("");
            $("#password").val("");
            $("#cpassword").val("");
          });

 }
 else
 {
     alert("The Password doesn't match with Confirm Password field");
 }

  });
