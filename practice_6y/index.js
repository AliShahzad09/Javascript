// practice 06 code with harry 
//   print  students marks and print in a loop

let marks = {
    Ali : 90,
    bilal : 80,
    subhan : 70,
}
// for (let i = 0; i<Object.keys(marks).length; i++) {
   
//  console.log("The Marks of " + Object.keys(marks)[i] + " are " + marks[ Object.keys(marks)[i]]);   
// }
    //   Qno1 using for in loop
// for (let i in marks){
//     console.log("The marks of " + i + " are " + marks[i])
// }

//  QNO3 write a program to print try again until the user enters the correct number.

// let cn = 10;
// if (cn>=20) {
//     console.log("you have enter correct number")
// } else {
//     console.log("Try Again")
// }

// write a function to find mean of 5 number .
    // Difficult way to find mean 
// let a = 2;
// let b = 3;
// let c = 4;
// let d = 5;
// let e = 6;
// console.log(a+b+c+d+e/5);
    //   Easy way to find mean
     
const mean =(a,b,c,d,e) =>{
    return (a+b+c+d+e)/5
}    
console.log(mean(4, 5, 6, 7, 8))