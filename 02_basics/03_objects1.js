//singleton
//Object.create

//object literals
const mySymbol = Symbol("key1")

const JSuser = {
    name:"Zack",
    "full name": "Zaki Ahmad",
    age: 19,
    [mySymbol]:"mykey1",//for symbols we use [] square brackets
    email:"Zaxk@gmail.com",
    IsloggedIn:false,
    LastLoggeinIn:["Monday","Saturday"]
}

//console.log(JSuser.email);
//console.log(JSuser["email"]);
//console.log(JSuser["full name"]);
//console.log(JSuser[mySymbol]);

JSuser.email = "Zack@chatgpt.com"
//Object.freeze(JSuser)
JSuser.email = "Zack@microsoft.com"
//console.log(JSuser);

JSuser.greeting = function(){
    console.log("Hello JS User");
    
}

console.log(JSuser.greeting());

JSuser.greetingtwo = function(){
    console.log(`Hello JS User,${this.name}`);
    
}

console.log(JSuser.greeting());
console.log(JSuser.greetingtwo());

