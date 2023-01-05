//click the button to generate a password, then a series of prompts: will ask
//How many characters would you like your password to contain?
//Click OK to include special characters/to include numbers?/to include lower case letters?/to include uppercase letters?
//Based on the conditions it will generate a password
//Also put a disclaimer: the password must contain at least 8 characters and no more than 128
//At least 1 character type must be selected


// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

//Write your code here

//Random index from an array of options  var index= Math.floor(Math.random()*options.length);  var options=["R","P","S"];
//use Crypto.getRandomValues(typedArray)
 
function generatePassword(confirm){

//An array of numbers
  const numbers = ["0","1","2","3","4","5","6","7","8","9"];
    
//An array of special characters
  const specialCharacters = ["!","#","$","%","&","(",")","*","+","-","/",":",";","<","=",">","?","@","[","]","^","_","{","|","}","~"];

//An array of letters
  const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  const lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

//User input of prompts  
  var confirm = [ ];

//Asks the number of characters for the password
  var numOfChars = window.prompt("How many characters would you like your password to contain?"," ");

//Remaining prompts 
  var prompts = ["special characters", "numbers", "lowercase letters", "uppercase letters"];

  //Conditional checks if user input is a num
    if (isNaN(numOfChars)){
      alert("It is not a number, try again");
    } else if (numOfChars >= 8 && numOfChars <= 128) {
      alert("It works!"); //Checks to make sure the conditional is working

      //loop runs through each prompt to determine what characters wil be in the array
      for(var i=0; i< prompts.length; i++) {
              confirm[i] = window.confirm("Click OK to include " + prompts[i]);
      }

      if (confirm[0] === true) {

      }

    } else {
      alert("You password must contain at least 8 and no more than 128 characters. Try again.")
    }
    

  passwordText.value = password;

}}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
