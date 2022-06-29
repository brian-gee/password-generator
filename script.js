// Defining the characters to be used for generating password
const lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
const capitalCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numberCharacters = "012345789";
const specialCharacters = "!@#$%^&*";

// This will be used to prompt the user on how they would like their password generated
// and run the function to return a random password to the users specifications
function generatePassword () {

  var characterList = "";
  var result = "";

  length = getPromptBetween(8, 128, "How many characters would you like? Choose a number between 8 and 128.");

  // Ask user to confirm character types for their password: if true, add character types to list
  if (confirm("Include lowercase characters?") == true) {
    characterList += lowerCharacters;
  } if (confirm("Include uppercase characters?") == true) {
    characterList += capitalCharacters;
  } if (confirm("Include numerical characters?") == true) {
    characterList += numberCharacters;
  } if (confirm("Include special characters?") == true) {
    characterList += specialCharacters;
  }

  // Iterate through character list 
  while (length > 0) {
    var index = Math.floor(Math.random() * characterList.length);
    result += characterList[index];
    length--;
  }

  return result;
}

// Prompt the user for a number between min and max
function getPromptBetween(min, max, userPropmt){
  let input = prompt(userPropmt);

  while (input < min || input > max) {
    alert("Enter a number between " + min + " and " + max + ".");
    input = prompt(userPropmt);
  }

  return input;
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
