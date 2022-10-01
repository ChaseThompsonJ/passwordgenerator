// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// My Code (Start of Dialogue Prompt)
function generatePassword() {
  var availChars = "";
  var pass = "";
  var numlist = "0123456789";
  var lowercaseList = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var symbolsList = "~!@#$%^&*()_+";

  var length = prompt(
    "How long would you like your password to be? Please enter a number between 8 & 128"
  );
  if (length < 8 || length > 128) {
    alert("Please re-enter a number between 8 & 128");
    return;
  } else if (isNaN(length)) {
    alert("Must enter a number!");
    return;
  }

  // Number List
  if (confirm("Would you like to include numbers?")) {
    availChars = availChars.concat(numlist);
  }

  // Lower Case
  if (confirm("Would you like to include lowercase letters?")) {
    availChars = availChars.concat(lowercaseList);
  }

  // Upper Case
  if (confirm("Would you like to include uppercase letters?")) {
    availChars = availChars.concat(uppercaseList);
  }

// Symbols
  if (confirm("Would you like to include symbols?")) {
    availChars = availChars.concat(symbolsList);
  }

  // if (!symbolsList && !numlist && !lowercaseList && uppercaseList)
  
  for (var i = 0; i < length; i++) {
    pass = pass.concat(
      availChars.charAt(Math.floor(Math.random() * availChars.length))
    );
  }
  
  return pass;
}


// End

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
