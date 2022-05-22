var Myform = document.getElementById("myFormName");
var Username = document.getElementById("name");
var email = document.getElementById("email");
var Password = document.getElementById("password");
var Gender = document.getElementsByName("gender");
var Sports = document.getElementsByName("sports");

const Form_Submit = function (e) {
  e.preventDefault();

  var Sports_Check = [];
  for (var i = 0; i < Sports.length; i++) {
    Sports[i].checked && Sports_Check.push(Sports[i].defaultValue);
  }
  var Gender_check = [];
  for (var i = 0; i < Gender.length; i++) {
    Gender[i].checked && Gender_check.push(Gender[i].defaultValue);
  }

  var Name_Error = document.getElementsByClassName("name_error")[0];
  var Email_Error = document.getElementsByClassName("email_error")[0];
  var Password_Error = document.getElementsByClassName("password_error")[0];
  var Sport_Error = document.getElementsByClassName("sports_error")[0];
  var Gender_Error = document.getElementsByClassName("gender_error")[0];

  Name_Error.textContent = Username.value == "" ? "Please enter your name" : "";
  Email_Error.textContent = email.value == "" ? "Please enter your email" : "";
  Password_Error.textContent = Password.value.length > 8 || Password.value.length < 8 ? "Password must be 8 characters at least." : "";
  Sport_Error.textContent = Sports_Check.length < 2 ? "Please select 2 options at least" : "";
  Gender_Error.textContent = Gender_check.length < 1 ? "Please select your gender" : "";
};
Myform.addEventListener("submit", Form_Submit);