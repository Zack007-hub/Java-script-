const myObject = {
    JS : "Javascript",
    cpp: "C++",
    py: "Python"
}

for (const key in myObject) {
    //   console.log(`${key} is shortcut for ${myObject[key]}`);
      
}

const programming = ["JS" , "cpp", "py"]

for (const key in programming) {
  //  console.log(programming[key]);
    
} 

const map = new Map()
map.set("PK","Pakistan")
map.set("SA","Saudia Arabia")
map.set("IT","Italy")

for (const key in map) {
     console.log(map[key]);
     
}