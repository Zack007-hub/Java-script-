//foreach loop

const coding = [" JS", " python", " cpp"]
coding.forEach( function (val) {
   // console.log(val);
    
})

coding.forEach( (item) => {
    //console.log(item);
    
})

function printme(item){
    console.log(item);
    
}
// coding.forEach(printme)

// coding.forEach( (item , index , array) => {
//     console.log(item , index , array);
    
// } )

const MyCoding = [{
    languageName : "Javascript",
    languageFileName : "js",

},
{
    languageName : "Python",
    languageFileName : "py",

},
{
    languageName : "C++",
    languageFileName : "cpp",

},
]

MyCoding.forEach( (item) => {
    console.log(item.languageName);
    
})