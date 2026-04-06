const name = "Zack"
const repoCount = 67

//console.log(name + repoCount + " Value");

console.log(`My name is ${name} and my repocount is ${repoCount}`);

const gameName = new String("Malware-Zack-Agent")
console.log(gameName);

console.log(gameName [0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase);
console.log(gameName.toLowerCase);
console.log(gameName.charAt(6));
console.log(gameName.indexOf('a'));

const Sub = gameName.substring(0,5)
console.log(Sub);

const anotherString = gameName.slice(-7,4)
console.log(anotherString);

const anotherNewString = "      Zack       "
console.log(anotherNewString);
console.log(anotherNewString.trim());

const url = "http://Zack.com/Zack%20Chughtai"
console.log(url.replace('%20','-'));
console.log(url.includes('Zack'));
console.log(url.includes('Malware'));

console.log(gameName.split('-'));



