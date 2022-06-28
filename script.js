// Assignment code here
const normalCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberCharacters = "012345789";
const specialCharacters = "!@#$%^&*";

function generatePassword () {
  let characters = prompt("Which characters would you like your password to include?\n 1 = Letters only (A-Z) \n 2 = Letters and numbers (A-Z+1-0) \n 3 = Letters, numbers, and special characters (A-Z+1-0+@#!$)");
  let passwordLength = prompt("How many characters would you like? Choose a number between 8 and 128.");

  return getPassword(characters, passwordLength);
}

function getPassword(type, length) {
  var characterList = normalCharacters;
  var result = "";

  if (type == 2) {
    characterList += numberCharacters;
  } else if (type == 3) {
    characterList += numberCharacters + specialCharacters;
  }
  while (length > 0) {
    var index = Math.floor(Math.random() * characterList.length);
    result += characterList[index];
    length--;
  }
  return result;
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
