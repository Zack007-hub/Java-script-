const marvel_heroes = ["Thor","Ironman","Spiderman"]
const dc_heroes = ["Flash","Superman","Batman"]
//marvel_heroes.push(dc_heroes)
//console.log(marvel_heroes);
//console.log(marvel_heroes[3][1]);

const All_Heroes = marvel_heroes.concat(dc_heroes)
//console.log(All_Heroes);

const newall_Heroes = [...marvel_heroes,...dc_heroes]//"..."is a spread operator used to merge arrays

//console.log(newall_Heroes);

const arr1 = [1, 2, 3,[ 4, 5, 6 ], 7 ,[ 6 , 7,[4,5]]]
const arr2 = arr1.flat(Infinity)
console.log(arr2);

console.log(Array.isArray("Zack"));
console.log(Array.from("Zack"));
console.log(Array.from({name:"Zack"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
