// CONCEPTS OF STACK AND HEAP MEMORY //

// WE KNOW THAT THERE ARE TWO TYPES OF DATA 
//1>> PRIMITIVE DATATYPE
//2>> NON-PREMITIVE DATATYPE


// PRIMITIVE DATATYPE < It follows stack-based Approach>  // In this approch it will make a copy of main value and change its value if it is mentioned in future
        let myChannelName = "Ayansaha@amazon.com";
            //console.log(myChannelName);
        
            let myChannelName1= "Ayansaha@amazon.com";
                let anotherName= myChannelName;
            anotherName="Ayan@intuit.com"

           // console.log(anotherName);
           // console.log(myChannelName)


//NON-PRIMITIVE DATATYPE < It follows heap-based Approach> // it will store the main code in heap memory and take its reference and change it 
                                                            // and in the future if it is changed then the main root value will also change 

let userOne={
    Name: "Ayan",       // It is declared as object type in key-value pairs//
    Email:"saha@3454"
}
    userTwo=userOne;
    userTwo.Email="ayan@222"
    console.log(userOne)
    console.log(userTwo)


