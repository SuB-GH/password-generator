//Assignment code here

var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lower = ["a", "b", "c", "d"];
var numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specChar = ["#", "@", "$", "*", "&", "%"]
console.log(upper);

/*
window.prompt ("Would you like to include uppercase letters in your password?");

window.prompt ("Would you like to include lowercase letters in your password?");

window.prompt ("Would you like to use numbers in your password?");

window.prompt ("Would you like to include special characters in your password?");

window.prompt ("How many characters would you like your password to be? (Between 8-12 characters)");

*/

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function() {
  window.prompt("Would you like to include uppercase letters in your password?");})

  

/* this works, but it is not what is required
function myFunction() {
document.getElementById("generate").innerHTML = "YOU CLICKED ME!";
} */
/*
function myFunction() {
  buttonClick.getElementById("generate") = "Would you like to include uppercase letters in your password?";
  }


function buttonClick() {
  let text;
  let xxxxx = window.prompt("Would you like to include uppercase letters in your password?")
  if (xxxx == null || person == "") {
  text = "User cancelled the prompt.";
  }   else {
  text = "thank you for your response";
  }
}
) */
