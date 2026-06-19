const MyNums = [1 ,2 ,3 ]

// const MyTotal = MyNums.reduce( function (acc, Crval) {
//     console.log(` acc: ${acc} and CrVal: ${Crval}`);
    
//     return acc + Crval
// },0 )//after the curly braces the value determines the acc value

const MyTotal = MyNums.reduce( (acc , CrVal) => {
    console.log(`acc : ${acc} Crval : ${CrVal}`);
    
    return acc + CrVal 
} ,0)
console.log(MyTotal);



const SteamGame = [
    {
        item : "Gta V",
        price : 6000
    },
    {
        item : "Far cry 6",
        price : 4000
    },
    {
        item : "Resident Evil 9",
        price : 7000
    },
    {
        item : "Dark souls 1 ",
        price : 10000
    },
]

const PriceToPay = SteamGame.reduce( (acc , item) => {
    console.log(`acc: ${acc} and GamePrice: ${item.price}`);
    
    return acc + item.price
},0 )
console.log(PriceToPay);
