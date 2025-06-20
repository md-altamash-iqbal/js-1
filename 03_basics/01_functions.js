function SayMyName(){
    console.log("A");
    console.log("L");
    console.log("T");
    console.log("A");
    console.log("M");
    console.log("A");
    console.log("S");
    console.log("H");
}

//SayMyName()

function addTwoNumbers(number1, number2){

    let result = number1 + number2
    //console.log("Altamash")
    return result
}

const result = addTwoNumbers(5, 4)

//console.log("Result: ", result);

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

//console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user)
handleObject({
    username: "Altamash",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){ 
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 700, 500, 600]))