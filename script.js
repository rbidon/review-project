// Start your code ***HERE*** =========

// create an array with all possible character types: Uppercase, Lowercase, numbers, and symbols stored in a variable
const allCharacterTypes = ["A","B","C","D","E","F","G","H","I","J", "L","M","N","O","P","Q","R","S","T","U","V","W","X","Y", "Z","a","b","c","d","e","f","g", "h","i","j","k","l","m","n","o", "p","q","r","s","t","u","v","w", "x","y","z","0", "1","2","3","4","5","6","7","8","9", "!","@","#", "$", "%", "&", "*","-","="];
// create a global variable called "pwLength" with a number between 10 and 18
const pwLength = 15; 
 // Using the above array and password length variable, create a random password using a for loop inside of a function called "addNewPassword" either saved as an arrow function variable or a traditional function
function addNewPassword() {
   let password = "";
    // for loop
    for (let i = 0; i < pwLength; i++) { 
       random =allCharacterTypes[(Math.floor(Math.random() * allCharacterTypes.length))];
      password += random;
    }
    return password;
}
addNewPassword();
console.log(addNewPassword());

// bonus: alert 

// ========= ⬇ DO NOT TOUCH THIS CODE ⬇ ======

let genBtn = document.getElementById("btnGen");
let buttonHandler = () => {
    document.getElementById("password").value = addNewPassword();
};
// Event listener for generate PW button
genBtn.addEventListener("click", buttonHandler);

// ========= ⬆ DO NOT TOUCH THIS CODE ⬆ ======
