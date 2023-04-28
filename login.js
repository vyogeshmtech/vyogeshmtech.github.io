function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username === "" || password === "") {
      document.getElementById("message").innerHTML = "Please fill in all fields";
      return;
    }
    
  function validateUsername(username, text) {
    var pattern = new RegExp(text, "i");
    return pattern.test(username);
  }
  
  var text = "admin";
  
  if (validateUsername(username, text)) {
    console.log("Username is valid");
    alert("Login successful!");
    //window.location.href = "https://vyogeshmtech.github.io/index.html";
  } else {
    console.log("Admin keyword NOT found in username");
    alert("Login failed!");
    document.getElementById("message").innerHTML = "Admin keyword NOT found in username";
  }  
  
  }
  
