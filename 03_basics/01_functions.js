
function sayMyName(){
    console.log("Z");
    console.log("A");
    console.log("C");
    console.log("K");
    
}
//sayMyName()//in this the function name is the reference and the parenthesis "()" is the one that executes it

//function addTwoNumbers(number1, number2){
    //console.log(number1 + number2);
    
//}


function addTwoNumbers(number1, number2){
    //let result = number1 + number2
    //return result
    return number1 + number2
    
}

const result = addTwoNumbers(3,5)
//console.log("Result:",result);


function LoginUsername(username = 'Malware') {
    if (!username) {
        console.log("Please enter the name");
        return 
    }
    return `${username} just logged in`
    
}
console.log(LoginUsername("Zack"));
//console.log(LoginUsername());//output is "undefined"


function calcuateCartPrice (val1,val2,...num1) {
    return num1
    
}
console.log(calcuateCartPrice(200,3000,4500,12000));

const user = {
    username: "Zack",
    price: 190
}

function ObjectHandler(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
    
}
ObjectHandler(user)
ObjectHandler({
    username : "Malware",
    price : 390
})

const MyNewArray = [200,300,400,500]

function returnSecondValue(getArray) {
    return getArray[1]
    
}

//console.log(returnSecondValue(MyNewArray));
console.log(returnSecondValue([200,300,400,500]));

