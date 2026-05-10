const user = {
    username : "Zack",
    price : 99,

    WelcomeMessage : function()
    {
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
        
        
    }
}
// user.WelcomeMessage()        //browser global object is window object
// user.username = "Sam"
// user.WelcomeMessage()
// console.log(this);

// function chai(){
//     let username = "Zack"
//     console.log(this.username);
    
// }
// chai()

const chai = () =>{
    let name = "Zack"
    console.log(this);
    
}
// chai()

// const addnum = (num1,num2) =>{
//     return num1 + num2            //explicit return
// }



// const addnum = (num1,num2) =>  num1 + num2
// const addnum = (num1,num2) =>  (num1 + num2)  //Implicit return
const addnum = (num1,num2) =>  ({username : "Zack"})
console.log(addnum(3,5));
