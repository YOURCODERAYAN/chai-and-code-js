// in this section we would learn about dates//

let firstDate=new Date();
    //console.log(firstDate)  // now using this we can see that it can print the current  date in the console but also with miliseconds//


   // console.log(firstDate.toString()) //Thu Jan 08 2026 12:52:08 GMT+0000 (Coordinated Universal Time) --> now it is in more readable format //
   // console.log(firstDate.toDateString()) // Thu Jan 08 2026 --> using this we can see that it is in more readable foramt //
   // console.log(firstDate.toLocaleDateString()) // 1/8/2026 --> now it is giving in more readble format //

//console.log(typeof firstDate) // we can easily see that the  type of firstdate is type object 


//let myCreatedDate = new Date(2023, 0, 23)
 //let myCreatedDate = new Date(2023, 4, 23, 5, 3)
//let myCreatedDate = new Date("2023-01-14")
//let myCreatedDate = new Date("01-14-2023")
 //console.log(myCreatedDate.toLocaleString());
//console.log(myCreatedDate)


//let myTimeStamp = Date.now()
   // console.log(myTimeStamp)  // now this a method means date.now() --> is a method of taking out the current time in miliseconds without crating object 
                                            // it is the fastest method of taking out the current time 
//console.log((Date.now()/1000)) // we willdivide it by 1000 to take out the exact time 
//console.log(Math.floor(Date.now()/1000))  // we can trim of  the value  using the Math.floor() // 


    let newDate = new Date()
//console.log(newDate);
//console.log(newDate.getMonth() +1); // there are many services buy which we can extract month , date , year etc .....
console.log(newDate.getDay());



// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', { // very important feature to use use this format ctrl+space to use this suggestion // we previiously used .LocaleString(){} to declare object //
                                                                            // in any format we want //                                                                                                            
    dayPeriod: "firstDate" , 
    
})






