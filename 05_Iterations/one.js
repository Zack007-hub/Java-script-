//for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    
    if (element == 5) {
       // console.log("5 is the best");
        
    }
    //console.log(element);
}


for (let i = 0; i <= 10; i++) {
      //console.log(`Outer loop: ${i}`);
      
    for (let j = 0; j <= 10; j++) {
      //console.log(`Inner loop : ${j} and ${i}`);
      //console.log(i + "*" + j  + "=" + i*j );
      
        
    }
    
}

let MyArr = ["Ichigo" , "Naruto" , "Goku"]
//console.log(MyArr.length);

for (let i = 0; i < MyArr.length; i++) {
  const element = MyArr[i];
  //console.log(element);
  
}



// break and continue

// for (let index = 1; index <=20; index++) {
//   if(index==5){
//     console.log("5 Detected");
//     break
//   }
//   console.log(`Value of i is :${index}`);
  
  
// }


for (let index = 1; index <=20; index++) {
  if(index==6){
    console.log("6 Detected");
    continue
  }
  console.log(`Value of i is :${index}`);
  
  
}