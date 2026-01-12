const marvelHeros=["thor" , "batman" , "spiderman"]
    //console.log(marvelHeros);

    const dcHeros=["superman" , "wondereoman" , "joker"];
    
           // console.log(dcHeros);

    // now to conact these two array in one array we can use 

const allHeros= marvelHeros.concat(dcHeros);  // usage of concat to combine two array//
    //console.log(allHeros);


const newallHeros= [... marvelHeros , ...dcHeros];   // we can also use this spread operator to concat two array into one in a sequence //
    //console.log(newallHeros);


    /// 1..flat(); ///
    /// 2. isArray(); ///
    ///3. from(); ///
    ///4.of(); ///

 // FLAT() -- > The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

    const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]  
           // console.log(another_array.flat(Infinity));
            //console.log(another_array.flat(2));
        
// isArray() --> The Array.isArray() static method determines whether the passed value is an Array.

    const newVal= [1,2,3,4];
        //console.log(Array.isArray(newVal))

    const newName = "Ayan";
       // console.log(Array.isArray(newName));
// from()--> The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.

    const newF= ("ayan is a good boy");
        //console.log(Array.from(newF))

        //console.log(Array.from({name: "hitesh"})) 
//of()--> The Array.of() static method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.

    let score1 = 100
let score2 = 200
let score3 = 300
    console.log(Array.of(score1 , score2 , score3))
