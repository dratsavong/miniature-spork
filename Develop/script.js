// Assignment code here

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseLetters = ["a", "c", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var characterChoice= []
  
function generatePassword(){
  var characterLength = parseInt(prompt("How many characters would you like in your password?")); //turns string into number
 
  if( characterLength < 8 || characterLength > 128 || (isNaN(characterLength))) {
  return alert("Please chose a character length of at least 8 characters and no more than 128 characters."); 
  } else { 
  alert("Your password will have " + characterLength + " characters." );
  }
  
  var hasNumbers = confirm("Would you like numbers in your password?");
  if (hasNumbers === true) {
    characterChoice = characterChoice.concat(numbers);
    alert("Your password will have numbers.")
  } else { 
    alert("Your password will not have numbers." );
  }

  var hasLowercase = confirm("Would you like lowercase letters in your password?");
  if (hasLowercase === true) {
    characterChoice = characterChoice.concat(lowercaseLetters);
    alert("Your password will have lowercase letters.")
  } else { 
    alert("Your password will not have lowercase letters." );
  }

  var hasUppercase = confirm("Would you like uppercase letters in your password?");
  if (hasUppercase === true) {
    characterChoice = characterChoice.concat(uppercaseLetters);
    alert("Your password will have uppercase letters.")
  } else { 
    alert("Your password will not have uppercase letters." );
    }

  if(hasNumbers === false && hasLowercase === false && hasUppercase === false) {
    return alert("You must select at least one character type. PLease try again.")
  }
  
  var newPassword = "";

  for(var i =0; i < characterLength; i++) {
    var random = Math.floor(Math.random() * characterChoice.length);
    newPassword = newPassword + characterChoice[random]
  } return newPassword;

};


  
  
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
