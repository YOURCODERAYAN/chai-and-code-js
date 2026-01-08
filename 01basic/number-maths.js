 let score= 300;
    //console.log(score) // --> 300;

// now to  use number all properties we can use 

let newNum= new  Number(300); // now it will enable all propeties related to number 
 //console.log(newNum);

 //console.log(newNum.toString()); // converts number to String
 //console.log(newNum.toString().length); // giving length which is 3

 //console.log(newNum.toFixed(1));
 //console.log(newNum . toFixed(2));
 //console.log(newNum.toFixed(3)) // now it will be used in various purpose if i give a number uptil which number i want to display i can do it by using this 


 const newNum2 = 2334.34;
    //console.log(newNum2.toPrecision(4)) // it will be actual precised value of a number 


const newNum3= 1000000;
 //console.log(newNum3.toLocaleString(`en`)) // it will create a string that we can understand if the value is long and we cannot understand it then in that purpose we can use it 

 //console.log(newNum3.toLocaleString(`en-IN`)); // SAME BUT IT RETURN IN INDIAN FORMAT SO THAT EVERYONE CAN UNDERSTAND 



 //**********************************MATHS*************************************************//

 console.log(Math); // same thing by using this we can access every properties of "MATH";

// console.log(Math.abs(-4));
 //console.log(Math.round(4.6));
 console.log(Math.ceil(4.2));                    // BASIC IMP Math.() properties to know about // 
 console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 6, 8));
 console.log(Math.max(4, 3, 6, 8));

 // *** NOW THIS IS A VERY IMPORTANT LOGIC TO REMEMBER ***// USESD IN MANY PROJECTS OF FINDING RANDOM NUMBERS 
console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)




