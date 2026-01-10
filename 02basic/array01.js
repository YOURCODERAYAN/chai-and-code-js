const firstArr= [0,1,2,3,4,5];
    const secondArr=["shaktiman" , "nagraaj" , "newhwero"];

//console.log(firstArr);
    //console.log(secondArr)

//const array= Array(1,2,3,4);
   // console.log([array[1]]); // in this way we can extract elemnts form an array // array in js is always '0' based indexing 


    // coming to the methods of Array we have //
// we have various methods in an Array those are --> 

//array.push(9);           // in this operation push helps to push the element at the end of the array
    //console.log(array);
//.push(45);
//array.push(34);
//console.log(array);   // this pop() operation pops out an element from the last of an array 

//array.pop();
//rray.pop();
//array.pop();
//array.pop();
    //onsole.log(array)


//array.unshift(10 , 3 , 67);
//console.log(array);           // this unshift method we can use to push new values in the front of the array 

//array.shift();
    //console.log(array)
//array.shift();               // The shift() method of Array instances removes the first element from an array and returns that removed element. This method changes the length of the array.
    //console.log(array);
//array.shift();
    //console.log(array);


 //console.log(array.includes(3)); // The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.
//console.log(array.indexOf(2)); //  The indexOf() method of Array instances returns the first index at which a given element can be found in the array, or -1 if it is not present.


//const newArr1=["ayan" , "saha" , "shreya"]
//const newArr= newArr1.join();

//const newArr3=newArr1.join("");
//const newArr4=newArr1.join("-")              //  join() //
                                            // join(separator) //

//console.log(newArr);
//console.log(newArr3);
//console.log(newArr4);


// Splice  and Slice //

//The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) 
// where start and end represent the index of items in that array.
const animals = ["ant", "bison", "camel", "duck", "elephant"];

       // console.log(animals.slice(2)) 
//console.log(animals.slice(2,4));

      //  console.log(animals.slice(1,5))

     //syntax: slice();
     //slice(start, end);
//SPLICE()//
const months = ["Jan", "March", "April", "June"]; // 0--> 1 , 1-->1 , 2-->1 , 3-->1//

//SYNTAX :  // splice(start, deleteCount, item1, item2, /* …, */ itemN); //
           // splice(start, deleteCount); //
          // splice(start); //
    
   // months.splice(1, 0 ,  "feb");
//console.log(months);

months.splice(4, 1, "May");
months.splice(2,1,"january")
    console.log(months); //


        
    
    
    













