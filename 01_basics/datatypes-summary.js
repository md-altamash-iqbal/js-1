 // primitive 

 // 7 types; String, Number, boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn =- false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 343874364783n


 // reference (Non Primitive)

 // Array, Objects, functions


 const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "Altamash",
    age: 24,

 }
 
 const myFunction = function(){
    console.log("Hello world");
    

 }

 console.log(typeof anotherId);


 //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (primitive), Heap (Non-Primitive)


let myYoutubename = "thealtamshiqbal"

let anothername = myYoutubename
anothername ="chaiaurcode"

console.log(myYoutubename)
console.log(anothername);

let userOne ={
   email: "user@google.com",
   upi: "user@ybl"
}

let userTwo = userOne


userTwo.email = "altu@google.com"

console.log(userOne.email);
console.log(userTwo.email);
 