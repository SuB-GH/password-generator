//Assignment code here

var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lower = ['a', 'b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];
//var passwordLength = ();

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Write password to the #password input


// Add event listener to generate button

var randomItem1 = upper[Math.floor(Math.random()*upper.length)];
console.log(randomItem1);

var randomItem2 = lower[Math.floor(Math.random()*lower.length)];
console.log(randomItem2);

var randomItem3 = numeric[Math.floor(Math.random()*numeric.length)];
console.log(randomItem3);

var randomItem4 = specChar[Math.floor(Math.random()*specChar.length)];
console.log(randomItem4);

/*
for (var i = 0; i <= passwordLength(); i++) {
  var randomNumber = Math.floor(Math.random)
}
*/


for(var i = 0; i < 3; i++) {
  console.log(randomItem1, + randomItem2, i);

  

  function generateRandom(length) {
    let result = ' ';
    
    }
    
}


// This is the function that runs whem Generate Password button is clicked
function generatePrompts() {
  buttonClick.getElementById("generate") = "Would you like to include uppercase letters in your password?";
  };


  
generateBtn.addEventListener("click", function() {
  var prompt = window.prompt("Would you like to include uppercase letters in your password?");})

  if (prompt === "" || prompt === null) {
    window.alert("Please provide an answer");
    
  }


if (upper) {
  window.alert("Your password will have uppercase letters.");
}
else if (!upper) {
  window.alert("Your password will not have uppercase letters.");
}


  /* This is the first window prompt
function generatePrompts() {
  if (generatePrompts == "yes") {
    window.alert ("Ok, your password will include uppercase letters");
  }

    console.log(includeUpper)
    
}
*/
function includeLower(yes) {
  if (includeLower == "yes") {
    window.alert ("Ok, your password will include uppercase letters");
  }

    console.log(includeLower)
    
}

/*
//add an "if yes statement here"

window.prompt ("Would you like to include lowercase letters in your password?");

window.prompt ("Would you like to use numbers in your password?");

window.prompt ("Would you like to include special characters in your password?");

window.prompt ("How many characters would you like your password to be? (Between 8-12 characters)");

*/


   

    //console.log(Math.random());

