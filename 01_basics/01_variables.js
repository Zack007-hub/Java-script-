const accountId= 123345
let accountEmail="Zaki@gmail.com"
var accountPassword="1234"
accountCity="Islamabad"
accountState="Punjab"
let accountName;

//accountId=234
accountEmail="Ahmad@gmail.com"
accountPassword= "2212121"
accountCity="Lahore"
//only constant cannot be change whereas var and let can be change
/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState,accountName])
