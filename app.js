
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

console.log("Welcome to Bad & Boozy Cocktail Recipes!")


/* Function to entering the password */
function Password() {
    var Password = "Yes";
    do {
        var UserProvidedPassword = prompt("Are you Bad and Boozy?")
    } while(UserProvidedPassword !== Password);
}
Password();

document.write("<br>");



/* Function to validate your age */
function myPrompt(newPrompt, accept, reject){
    var response = prompt(newPrompt);
    response = response.toLowerCase();
    console.log(response);

    var alertMessage;
    if(response === "yes"){
        alertMessage = accept;
    } else {
        while (response.toLowerCase() != "yes"){
            alert(reject);
            console.log(response);
            response = prompt (newPrompt);
        }
        alertMessage = accept;
        alert(alertMessage);
    }
    return alertMessage;
}
    myPrompt("Are you over the age of 21", "Congratulations!", "Sorry, Please wait until your 21 years old. SEE YOU LATER")

