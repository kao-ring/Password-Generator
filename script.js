// Assignment Code
var generateBtn = document.querySelector("#generate");

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

var passwordLength;

var numbersChoice = false;
var symbolsChoice = false;
var capsChoice = false;
var lowercaseChoice = false;

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
  }
  if (symbolsChoice) {
    allOptions = allOptions.concat(symbols);
    console.log(allOptions);
  }
  if (capsChoice) {
    allOptions = allOptions.concat(alphabetCaps);
  }
  if (lowercaseChoice) {
    allOptions = allOptions.concat(alphabetLower);
  }

  //Choose characters randomly from array "allOptions"
  var charBox = [];
  for (i = 0; i < passwordLength; i++) {
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
