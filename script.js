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
  var passwordText = document.querySelector("#password");}

//Write your code here

//Random index from an array of options  var index= Math.floor(Math.random()*options.length);  var options=["R","P","S"];
 
  function generatePassword(confirm){
    //An array of numbers
      const numbers = ["0","1","2","3","4","5","6","7","8","9"];
    
    //An array of special characters
      const specialCharacters = ["!","#","$","%","&","(",")","*","+","-","/",":",";","<","=",">","?","@","[","]","^","_","{","|","}","~"];

    //An array of letters
      const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]; //use .split() to spilt the character
      var confirm = [ ];
      
      var prompt1 = window.prompt("How many characters would you like your password to contain?"," ");
  //  var prompts = ["special characters", "numbers", "lower case letters", "upper case letters"];
  
  //Conditional checks if user input is a num
    if (isNaN(prompt1)){
      alert("It is not a number, try again");
    } else if (prompt1 >= 8 && prompt1 <= 128) {
      alert("It works!");
      for(var i=0; i< prompts.length; i++) {
              confirm[i] = window.confirm("Click OK to include " + prompts[i]); //loop runs through each prompt
      }

    } else {
      alert("Try again.")
    }
    

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
