var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];
var passwordLength
var containerArray = [];
var generatePassword

// button click generates window prompt with first question
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function () {

  var password = ""
  // 'how many characters' prompt
  passwordLength = window.prompt("How many characters would you like your password to be? (Select a number between 8-128)");

  // if/else statement to verify password length is between 8-128 characters
  // while (!(passwordLength >= 8 && passwordLength <= 128)) {
  //   alert("Password length should be equal to or greater than 8 and less than or equal to 128");
  //   passwordLength = window.prompt("How many characters would you like your password to be? (Select a number between 8-128)");
  // }
  // else {
    
  // }

  while (passwordLength < 8 || passwordLength > 128) {
    alert("Password length should be equal to or greater than 8 and less than or equal to 128");
    passwordLength = window.prompt("How many characters would you like your password to be? (Select a number between 8-128)");
  }

  // uppercase letters prompt
  var upperCase = window.confirm("Would you like to include uppercase letters in your password?")

  if (upperCase) {
    containerArray.push(...upper);
  }

  //lowercase letters prompt
  var lowerCase = window.confirm("Would you like to include lowercase letters in your password?")

  if (lowerCase) {
    containerArray.push(...lower);
  }

  //numbers prompt
  var numbers = window.confirm("Would you like to include numbers in your password?")

  if (numbers) {
    containerArray.push(...numeric);
  }

  //special characters prompt
  var characters = window.confirm("Would you like to include special characters in your password?")

  if (characters) {
    containerArray.push(...specChar);
  }
  password = ""
  // randomly select characters from containerArray to create password
  for (var i = 0; i < passwordLength; i++) {
    var randomItem = containerArray[Math.floor(Math.random() * containerArray.length)];
    password = password + randomItem
  }

  // Write password to the #password input
  function writePassword() {
    //var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }

  writePassword();
  containerArray = [] //this "clears out" the password and allows user to generate a new one upon button click
})

