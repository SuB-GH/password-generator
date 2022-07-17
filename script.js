var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];


// button click generates window prompt with first question
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function () {
  // Uppercase letters prompt
  var upperCase = window.prompt("Would you like to include uppercase letters in your password?")

  if (upperCase === "yes" || upperCase === "YES")
    window.prompt("Ok. Your password will include uppercase letters.");

  else if (upperCase === "no" || upperCase === "NO")
    window.prompt("Ok. Your password will NOT include uppercase letters.");

// lowercase letters prompt
  var lowerCase = window.prompt("Would you like to include lowercase letters in your password?")

  if (lowerCase === "yes" || lowerCase === "YES")
    window.prompt("Ok. Your password will include lowercase letters.");

  else if (lowerCase === "no" || lowerCase === "NO")
    window.prompt("Ok. Your password will NOT include lowercase letters.");

    //Numbers prompt
  var numbers = window.prompt("Would you like to include numbers in your password?")

  if (numbers === "yes" || numbers === "YES")
    window.prompt("Ok. Your password will include numbers.");

  else if (numbers === "no" || numbers === "NO")
    window.prompt("Ok. Your password will NOT include numbers.");

  //special characters prompt
  var characters = window.prompt("Would you like to include special characters in your password?")

  if (characters === "yes" || characters === "YES")
    window.prompt("Ok. Your password will include special characters.");

  else if (characters === "no" || characters === "NO")
    window.prompt("Ok. Your password will NOT include special characters.");

})

  // // function to generate a random numeric value
  // var randomItem = function (min, max) {
  //   var value = Math.floor(Math.random() * (max - min) + min);
  //   return value;

  // }







//   var randomItem = lower[Math.floor(Math.random() * lower.length)];
//   console.log(randomItem2);

//   var randomItem = numeric[Math.floor(Math.random() * numeric.length)];
//   console.log(randomItem3);

//   var randomItem = specChar[Math.floor(Math.random() * specChar.length)];
//   console.log(randomItem4);