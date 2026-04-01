//Primitive

// 7 Types: String , Number , Boolean , Null , Undefined , Symbol , BigInt

const value = 100
const gameScore = 67
const temp = null
const IsloggedIn = false

const Id = Symbol('123')
const anotherId = Symbol("123")
console.log(Id===anotherId);

const bigNumber = 6746374637463746n
console.log(typeof bigNumber);




//Reference (Non Promitive)
// Arrays , Objects , Functions

const arr =  ["Eren" , "Light" , "Ichigo"]
let myObj = {
    Name : "Zaki",
    age : 18
} 

const myfunction = function(){
    console.log("Hello World");
    
}
console.log(typeof myfunction);
