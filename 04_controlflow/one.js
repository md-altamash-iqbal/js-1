// if

// const balance = 1000

// if (balance > 500 ) console.log("test"),console.log("test2");

// if (balance > 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 750")
// }else{
//     console.log("less than 1200")
// }

const userLoggedIn = true 
const debitCard = true 
const loggedInFromGoogle = false
const loggedInFromEmail = true 

if (userLoggedIn && debitCard && 2==3){
    console.log ("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in")
}