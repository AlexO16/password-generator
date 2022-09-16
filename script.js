// Assignment Code
var generateBtn = document.querySelector("#generate");

//Global variable
var userCharacters = 12;
var lowerCaseUser = true;
var upperCaseuser = false;
var numberUser = true;
var specialCharactersUser = false;


//arrays
var useLowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var useUpperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var useNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var useSpecialCharacters = ["!", "@", "#", "$", "%", "&", "^", "*", "~", "<", ">"]
var emptyArray = [];
var passwordArray = [];
var joinStringArray = [];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


//
function generatePassword() {
  console.log("Button clicked")
  howManyCharacters();
  if (userCharacters < 8 || userCharacters > 128) {                  //alert user to chose number with parameter
    alert("Characters have to be greater than 8 and less than 128");
  };
  useLowerCaseLettersFunction();
  useUpperCaseLettersFunction();
  useNumbersFunction();
  useSpecialCharactersFunction();
  emptyArray = [];
  filter();
  passwordArray = [];
  generatePasswordArray();
  var result1 = passwordArray.join("");
  console.log(result1);
  return result1
}


function howManyCharacters() {
  userCharacters = parseInt(prompt("How many characters?"));
  console.log(userCharacters)
};


function useLowerCaseLettersFunction() {
  lowerCaseUser = confirm("Do you want to use lowercase letters?");
  console.log(lowerCaseUser)
};


function useUpperCaseLettersFunction() {
  upperCaseUser = confirm("Do you want to use uppercase letters?");
  console.log(upperCaseUser)
};


function useNumbersFunction() {
  numberUser = confirm("Do you want to use numbers?");
  console.log(numberUser)
};


function useSpecialCharactersFunction() {
  specialCharactersUser = confirm("Do you want to use special characters?");
  console.log(specialCharactersUser)
};


function filter() {
  if (lowerCaseUser === true) {
    emptyArray.push(useLowerCaseLetters)
  };
  if (upperCaseUser === true) {
    emptyArray.push(useUpperCaseLetters)
  };
  if (numberUser === true) {
    emptyArray.push(useNumbers)
  };
  if (specialCharactersUser === true) {
    emptyArray.push(useSpecialCharacters)
  };
  joinStringArray = emptyArray.flat();
};

function generatePasswordArray() {
  for (var i = 0; i < userCharacters; i++) {
    var min = 0;
  var max = joinStringArray.length;
  var y = Math.floor(Math.random () * (max - min + 1) + min);
  passwordArray.push(joinStringArray[y]); }

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


