// according to the theory the datatypes in javascript are divided into two parts 

// 1>> (PRIMITIVE DATATYPES) //
// 2>> REFERENCE OR WE CAN SAY IT (NON-PRIMITIVE DATATYPES) //


// NOW COMING TO PRIMITIVE DATATYPES 

// 7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

/*const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;
*/

const id = Symbol('123')            // this Symbol represents a special kind to a var if we assign  same value to a diff var this 
                                    //  then we have to use Symbol it will differentiate it //
const anotherId = Symbol('123')

console.log(id === anotherId); // giving fale; //  without using Symbol it is giving true // 

// const bigNumber = 3456543576654356754n


// NOW reference types or we can say NON-PRIMITIVE datatypes 

    // Array, Objects, Functions

// DECLARE AN ARRAY 

const heros=['spiderman' , " Thor"  , "captain america"];

// DECLARE AN OBJECT
    const myObj={ // we have to write in key : value pair//
        name: " Ayan" , 
        roll: " 007" , 
        sec: "cse A",
        year: " third",
        
    }

    // DECLARE A FUNCTION 
    const myFun = function(){
        console.log("HELLO WORLD")
    }
    
    //





