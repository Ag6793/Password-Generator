// Generate password button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

function generatePassword (confirm) {

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

  var passarray = [ ];

  //Conditional checks if user input is a num
    if (isNaN(numOfChars)){
      alert("It is not a number, try again");

    } else if (numOfChars >= 8 && numOfChars <= 128) {
      //for loop for confirmation prompts. Will determine what will be included in the password
      for(var i=0; i< prompts.length; i++) {
              confirm[i] = window.confirm("Click OK to include " + prompts[i]);
      }

      if (confirm[0] === true) {
        passarray = passarray.concat(...specialCharacters);
        console.log("you added special characters");
        console.log(passarray);
      }; 

      if (confirm[1] === true) {
        passarray = passarray.concat(...numbers);
        console.log("you added numbers");
        console.log(passarray);
      };

      if (confirm[2] === true) {
        passarray = passarray.concat(...lowerCase);
        console.log("you added lowercase");
        console.log(passarray);
      };

      if (confirm[3] === true) {
        passarray = passarray.concat(...upperCase);
        console.log("you added uppercase");
        console.log(passarray);
      };
  
      //if the user does not selet any characters for the password, they will get an alert to try again
      if (!confirm[0] && !confirm[1] && !confirm[2] && !confirm[3] ) return window.alert("You did not select any characters, try again");//doesn't work yet
  
    } else {
      alert("You password must contain at least 8 and no more than 128 characters. Try again.")
    }
    
    //Generates Password from user input
    let finalPassword = "";
    for (let i = 0; i < numOfChars; i++) {
      let rng =[Math.floor(Math.random() * passarray.length)];
      finalPassword = finalPassword + passarray[rng];
    }
    return finalPassword;
} 
 passwordText.value = password;

};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
