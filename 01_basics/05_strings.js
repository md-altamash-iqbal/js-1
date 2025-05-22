const name = "altamash"
const repoCount = 50

//console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hiteshhc')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)  // you can put negative value in slice
console.log(anotherString);

const newStringOne = "   altamash    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://altamash.com/altamash%20iqbal"

console.log(url.replace('%20', '-'));

console.log(url.includes('sundar'))

console.log(gameName.split());


