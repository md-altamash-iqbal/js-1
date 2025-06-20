//for 

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log("5 is the best ")

//     }

//     console.log(element)

// }
// console.log(element)

// for (let i = 0; i <= 20; i++) {
//     console.log(`outer loop value: ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         // console.log(`Inner loop value ${j} and inner loop ${i}`)
//         console.log(i + '*' + j + ' = ' + i*j) ;

//     }

// }

let myArray = ["flash", "batman", "superman"]
console.log(myArray);
for (let index = 0; index < myArray; index++) {
    const element = myArray[index];
    console.log(element);

}


//  break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index==5) {
//         console.log(`Detected`);
//         break
//     }
//     console.log(`value of i is ${index}`);

// }

for (let index = 1; index <= 20; index++) {
    if (index == 6) {
        console.log(`Detected 6`);
        continue
    }
    console.log(`value of i is ${index}`);

}