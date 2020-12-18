
/* ################ EXAMPLE CODE FROM CLASS DO NOT USE ################ */
/*var myVariableName;

myVariableName = "Hello, World!";
console.log(myVariableName); //exception output: Hello, World

var promptQuestion = "What is the best starter pokemon?";
var response = prompt(promptQuestion);
console.log(response);

var alertMessage;
var color; //declare variable


if (response === "Squirtle"){
    alertMessage = "Excellent";
    color = "";
} else if (response === "")
    {

    } */ 

/* ############## REFACTORED CODE ############## */

/* Function to entering the password */
function Password() {
    var Password = "Yes";
    do {
        var UserProvidedPassword = prompt("Are you Bad and Boozy?")
    } while(UserProvidedPassword !== Password);
}