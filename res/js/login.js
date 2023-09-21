function validate(){
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;
if ( email == "ADMIN@esigelec.com" && password == "ADMIN"){
window.location = "indexVisitors.html"; 
return false;
}
else{
alert("Incorrect credentials");
}
}
