// Assignment Code
var generateBtn = document.querySelector("#generate");

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

var passwordLength;

var numbersChoice = false;
var symbolsChoice = false;
var capsChoice = false;
var lowercaseChoice = false;

var confirms = 0;

var passwordText = document.querySelector("#password");

var numbers = "1234567890".split("");
var symbols = "~!@#$%^&*()-=_+".split("");
var alphabetCaps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var alphabetLower = "abcdefghijklmnopqrstuvwhyz".split("");

// Write password to the #password input
function generatePassword() {
  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  passwordLength = prompt("How long do you want your password to be?");
  if (passwordLength > 128 || passwordLength < 8) {
    alert("Please choose a number between 8 - 128.");
    return generatePassword();
  }

  //Ask users all otions. //if its true, at least 1 of them need to be in there
  numbersChoice = confirm("Do you want numbers?");
  symbolsChoice = confirm("Do you want symbols?");
  capsChoice = confirm("Do you want caps?");
  lowercaseChoice = confirm("Do you want lower case?");

  //Put all items that user choose into one array
  var allOptions = [];

  if (numbersChoice) {
    allOptions = allOptions.concat(numbers);
    confirms = confirms + 1;
  }
  if (symbolsChoice) {
    allOptions = allOptions.concat(symbols);
    console.log(allOptions);
    confirms = confirms + 1;
  }
  if (capsChoice) {
    allOptions = allOptions.concat(alphabetCaps);
    confirms = confirms + 1;
  }
  if (lowercaseChoice) {
    allOptions = allOptions.concat(alphabetLower);
    confirms = confirms + 1;
  }

  //Choose characters randomly from array "allOptions"
  var charBox = [];
  for (i = 0; i < passwordLength; i++) {
    // var j = Math.floor(Math.random() * allOptions.length);
    // var singlePasswordLetter = allOptions[j];
    charBox = charBox.concat(
      allOptions[Math.floor(Math.random() * allOptions.length)]
    );
  }
  return charBox.join("");
}

function writePassword() {
  var password = generatePassword();
  passwordText.value = password;
}
// WHEN I click the button to generate a password
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// THEN I am presented with a series of prompts for password criteria

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
