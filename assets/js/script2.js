document.getElementById("booking-form").addEventListener("submit", function(event) {
  event.preventDefault();
  
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var date = document.getElementById("date").value;
  var time = document.getElementById("time").value;
  
  // Here, you can send the form data to a server or perform any other actions you want
  
  document.getElementById("booking-status").innerHTML = "Booking confirmed for " + name + " on " + date + " at " + time + ".";
  
  // Optionally, you can reset the form after submission
  document.getElementById("booking-form").reset();
});
