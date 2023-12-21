document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    login(email, password);
  });
  
  function login(email, password) {
    if (email === "example@gmail.com" && password === "password") {
      alert("Login successful");
    } else {
      alert("Login failed. Incorrect email or password.");
    }
  }
  