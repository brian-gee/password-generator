// Defining the characters to be used for generating password
const lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
const capitalCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numberCharacters = "012345789";
const specialCharacters = "!@#$%^&*";

// This will be used to prompt the user on how they would like their password 
// generated and run the getPassword function to return a random password to the users specifications
function generatePassword () {
  characters = getPromptBetween(1, 4, "Which characters would you like your password to include?\n 1 = Lowercase letters only (a-z)\n2 = Uppercase and lowercase letters (a-z, A-Z)\n3 = Letters and numbers (a-z, A-Z, 1-0)\n4 = Letters, numbers, and special characters (A-Z+1-0+@#!$)");

  passwordLength = getPromptBetween(8, 128, "How many characters would you like? Choose a number between 8 and 128.");

  return getPassword(characters, passwordLength);
}

function getPassword(type, length) {
  var characterList = "";
  var result = "";

  if (type == 1) {
    characterList += lowerCharacters;
  } else if (type == 2) {
    characterList += lowerCharacters + capitalCharacters;
  } else if (type == 3) {
    characterList += lowerCharacters + capitalCharacters + numberCharacters;
  } else if (type == 4) {
    characterList += lowerCharacters + capitalCharacters + numberCharacters + specialCharacters;
  }

  while (length > 0) {
    var index = Math.floor(Math.random() * characterList.length);
    result += characterList[index];
    length--;
  }

  return result;
}

function getPromptBetween(min, max, userPropmt){
  let input = prompt(userPropmt);

  while (input < min || input > max) {
    alert("Enter a number between" + min + " and " + max);
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
