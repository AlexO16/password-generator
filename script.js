// Assignment Code
var generateBtn = document.querySelector("#generate");

//Global variable
var numberOfCharacters;
var useLowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var useUpperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//var useNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0" ];
//var useSpecialCharacters = ["!", "@", "#", "$", "%", "&", "^", "*", "~", "<", ">"]



//function generateRandomNumber(min, max){
//  var random= math.floor(math.random() * (max- min +1 ) + min);
//  console.log(random)
//}

//generateRandomNumber(8, 128);


function howManyCharacters() {
  numberOfCharacters = parseInt(prompt("How many characters?"));
  console.log(numberOfCharacters)
}


function useLowerCaseLetters() {
  useLowerCaseLetters = confirm("Click OK to confirm including lowercase characters.");
  console.log(useLowerCaseLetters)
}


function useUpperCaseLetters() {
  useUpperCaseLetters = confirm("Click OK to confirm including uppercase characters.");
  console.log(useUpperCaseLetters)
}


//function useNumbers() {
//  useNumbers = confirm("Click OK to confirm including numbers.");
//  console.log(useNumbers)
//}


//function useSpecialCharacters() {
//  useSpecialCharacters = confirm("Click OK to confirm including special characters.")
//}


function generatePassword = () {
  console.log("Button clicked")
  howManyCharacters();
  useLowerCaseLetters();
  useUpperCaseLetters();
  //  useNumbers();
  //  useSpecialCharacters();

  return "Random generated pasword"
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


