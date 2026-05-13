let UserEmail = []

if (UserEmail) {
    console.log("Got User Email");
    
}else{
    console.log("Dont have User Email");
    
}

//falsy values

//false , 0 ,-0, BigInt 0n , "" , null , undefined , Nan

//truthy values
// " 0 ", 'false' , " " ,[], {},function(){}

if (UserEmail.length === 0) {
    console.log("Array is empty");
    
}

const MyObj = {}
if (Object.keys(MyObj).length === 0) {
    console.log("Object is empty");
    
}


// Nullish Coalescing Operator (??): null undefined
let val1 ;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ??20

console.log(val1);

//Ternary operator

// condition ? true : false

const Iceprice = 100
Iceprice <= 80 ? console.log("less than 80") : console.log("Greater than 80");
;
