/*const userEmail=0; //case depends upon truthy and falsy values //

if(userEmail){
      //  console.log("i got userEmail");
}
else{
       // console.log("i will not get that");
}*/


// IF i enlist some of truthy and  fasly values that will be //
//if (true);
//if ({});
/*if ([]);
if (42);
if ("0");
if ("false");
if (new Date());
if (-42);
if (12n);
if (3.14);
if (-3.14);
if (Infinity);
if (-Infinity);*/

// ONE MORE IMPORTANT THING //

// USAGE OF LOGICAL AND OPERATOR IN TRUTHY VALUES 
// IT ALWAYS RETURN THE SECOND VALUE IF THE FIRST OPERAND IS TRUTHY//
//true && "dog";
// returns "dog"

//[] && "dog";
// returns "dog"


// FALSY VALUES//

//false, 0, -0, BigInt ,0n , "", null, undefined, NaN

//if (false) {
  // Not reachable
//}

//if (null) {
  // Not reachable
//}

//if (undefined) {
  // Not reachable
//}

//if (0) {
  // Not reachable
//}

//if (-0) {
  // Not reachable
//}

//if (0n) {
  // Not reachable
//}

//if (NaN) {
  // Not reachable
//}

//if ("") {
  // Not reachable
//}

// USING AND OPERATOR USING FALSY OPERATOR //

//IF THE FIRST OBJECT IS FASLSY IT RETURN THAT OBJECT

//console.log(false && "dog");
// ↪ false

//console.log(0 && "dog");
// ↪ 0

/*const emptyObj = {}

if (Object.keys(emptyObj).length == 0) {
    console.log("Object is empty");
}*/

// Nullish Coalescing Operator (??): null undefined

//The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand 
//is null or undefined, and otherwise returns its left-hand side operand.//

/*const foo = null ?? "default string";
console.log(foo);
// Expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// Expected output: 0*/

let val1;
val1=null??4??2;
console.log(val1)

//TERNARY OPERATOR //

// Terniary Operator

// condition ? true : false

//const iceTeaPrice = 34
//iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")