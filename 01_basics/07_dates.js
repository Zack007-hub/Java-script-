//Dates

let myDate = new Date();
//console.log(myDate.toDateString());
//console.log(myDate.toISOString());
//console.log(myDate.toJSON());
//console.log(myDate.toLocaleDateString());
//console.log(myDate.toLocaleString());
//console.log(typeof myDate);
//let date = new Date(2020,0,12)
//let date = new Date(2020,0,12,4,30)
//let date = new Date("2020-01-12")
let date = new Date("01-12-2020")
console.log(date.toLocaleString());

let myTimestamp =  Date.now()
console.log(myTimestamp);
console.log(date.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate.getFullYear());
console.log(newDate.getDay());
newDate.toLocaleString('default',{
    weekday : "long"
})




