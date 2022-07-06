// Assignment code here

  // assigns options as an array to variables
function generatePassword() {
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z"];
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var characters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

  // prompts user for length input
  var pLength = window.prompt("Choose password length from 8 - 128 characters:");
    if (pLength <8 || pLength >128)
      alert("Please choose a number between 8 - 128")

  // prompts user to answer yes or no to adding characters, numbers, and upper case letters to password
  var charPrompt = window.confirm("Do you want to include special characters?");
  var numbersPrompt = window.confirm("Do you want to include numbers?");
  var uppersPrompt = window.confirm("Do you want to include uppercase letters?")

  // adds confirmed choices (characters, numbers, or upper case letters) to array of lowercase letters
  if (charPrompt) lowerCase.push(...characters)
  if (numbersPrompt) lowerCase.push(...numbers)
  if (uppersPrompt) lowerCase.push(...upperCase)

  // to visualize list of possible choices in an array
    console.log (lowerCase)

  // declare outside of the for loop for use in for loop
 var password = ""

    // loops through array of choices and randomizes to the pLgenth (length user input)
    for (var i = 0; i < pLength; i++) {
     password = password + lowerCase[Math.floor(Math.random() * lowerCase.length)];
      
    }
// returns the generated password
return password;
}
    

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
 

