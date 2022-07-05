var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];

// button click generates window prompt with first question
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", function () {
  var upperCase = window.prompt("Would you like to include uppercase letters in your password?")
  // THESE WORK!
  if (upperCase === "yes" || upperCase === "YES")
    window.alert("Ok. Your password will include uppercase letters");

  else if (upperCase === "no" || upperCase === "NO")
    window.alert("Ok. Your password will NOT include uppercase letters");

  if (upperCase === "" || upperCase === null) {
    window.alert("Please provide an answer");
  }
})



// 

// var upperSelect = function(){
//   window.prompt("Would you like to include uppercase letters in your password?")
//   if (window.prompt.value === "yes" || window.prompt.value === "YES") 
//     window.alert("ok");

//   upperSelect();

//   if (upper) {
//     window.alert("Your password will have uppercase letters.");
//   }



var randomItem1 = upper[Math.floor(Math.random() * upper.length)];
console.log(randomItem1);

var randomItem2 = lower[Math.floor(Math.random() * lower.length)];
console.log(randomItem2);

var randomItem3 = numeric[Math.floor(Math.random() * numeric.length)];
console.log(randomItem3);

var randomItem4 = specChar[Math.floor(Math.random() * specChar.length)];
console.log(randomItem4);