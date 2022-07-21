var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];
var passwordLength
var containerArray = [];


// button click generates window prompt with first question
var generateBtn = document.querySelector("#generate");



generateBtn.addEventListener("click", function () {
  // uppercase letters prompt
  //var upperCase = window.prompt("Would you like to include uppercase letters in your password?")
var password = ""

  passwordLength = window.prompt("How many characters would you like your password to be? (Between 8-128)");

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

  for(var i = 0; i < passwordLength; i++) {
    var randomItem = containerArray[Math.floor(Math.random() * containerArray.length)];
    password = password + randomItem

  }

  

  console.log(password);
  // for (let i = 0; i = 5; i++) {
  //   text += "test number is " + i + "<br>";
  // };

})





// for(var i=0; i< = passwordLength; i++) {
//   var randomItem = function (min, max) {}
// }




//   var randomItem = lower[Math.floor(Math.random() * lower.length)];
//   console.log(randomItem2);

//   var randomItem = numeric[Math.floor(Math.random() * numeric.length)];
//   console.log(randomItem3);

// var randomItem = specChar[Math.floor(Math.random() * specChar.length)];
// console.log(randomItem4);


// var randomChar = function(min, max) {
//   var value = Math.floor(Math.random() * 12);

//   return value;
  
// }
// randomChar();
// console.log(randomChar);


// for(var i = 0; i < upper.length; i++) {
//   for(var i = 0; i < lower.length; i++)
//   for(var i = 0; i < numeric.length; i++)
//   for(var i = 0; i < specChar.length; i++)
//   console.log(upper[i], lower[i], numeric[i], specChar[i]);


// // STARTER CODE BEGIN
// // Assignment code here
// // Get references to the #generate element
// 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// STARTER CODE END