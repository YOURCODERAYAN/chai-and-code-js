// SCOPES IN JAVASCRIPT IS A VITAL TOPIC TO UNDERSTAND //
//-------------------------------------------------------------------------//
//Global Scope  -- > done 

//Function Scope --- > done 

//Block Scope

// Lexical Scope 
//---------------------------------------------------------------------------//
//GLOBAL SCOPE 

// 1.  // Variables declared outside any function or block // 

/*let x = 10;

function test() {
  console.log(x);
}
                                 // Global variables are accessible everywhere
                               // Avoid overusing them (pollution risk)
test();
console.log(x);*/
 // we cannot use var to declare any argument use let and const //
//------------------------------------------------------------------------------------------------------------->
 // 2. // FUNCTION SCOPE //

 // Variables declared inside a function //


 //function test1(){
  //      let y=7;
   // console.log(y)
 //}
//test1();

//console.log(y);     // now this syntax will give error if we want to access it outside the function // 

// but if we comment out this we can get our desired value which was called inside the function //


//var, let, const inside a function are not accessible outside// important note 

//------------------------------------------------------------------------------------------------------------------>
// 3 . // BLOCK SCOPE //

//Blocks = {} (if, for, while, etc.)  // ACCORDING TO THE NAME FOLLOWS THIS MEANS THE ARGUMANT WILL BE DECLARED INSIDE THE BLOCK MEAN  INSIDE THE CONDIITONAL OR LOOP STATEMENTS


if (true) {
  //let x = 5;
  //const y = 10;
  //console.log(x);
  //console.log(y);
}

// IMPORTANT RULE TO REMEMBER //
// let and const are blocked scoped //
// var is not blocked  scoped //

//------------------------------------------------------------------------------------------------------------------->
// Lexical Scope 

// Inner functions can access variables of outer functions

function ayan(){
     
        let x=10;

        function saha(){
        
            console.log(x);
        }

    saha();
    
}
ayan();

// Scope is decided by where code is written, not executed//


/*Global Scope	 -->Accessible everywhere
Function Scope	-->Variables inside function
Block Scope	 -->let & const only
var	Function scoped, hoisted
Lexical Scope	-->Inner can access outer
Closure	-->Function remembers scope
Scope Chain	-->Local → Global
TDZ-->	let/const before declaration ❌*/





