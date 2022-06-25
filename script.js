// Assignment code here
function generatePassword () {
  alert("Hello! Thanks for choosing Brian's Pass V1.0.")
  let characters = prompt("Which characters would you like your password to include?\n 1 = Letters only (A-Z) \n 2 = Letters and numbers (A-Z+1-0) \n 3 = Letters, numbers, and special characters (A-Z+1-0+@#!$)");
  let passwordLength = prompt("How many characters would you like? Choose a number between 8 and 128.");
  return characters;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
