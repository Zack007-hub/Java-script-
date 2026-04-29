//arrays

const myArr = [ 0, 1, 2, 3, 4, 5]
const Akatsuki = ["Itachi","Pain","Kisame","Hidane"]
const myArr2 = new Array(1,2,3,4,5)
console.log(myArr[2]);
console.log(Akatsuki[3]);

//Array Methods
myArr.push(6)//"push" To add something in the array
myArr.push(7)
myArr.pop()//"pop" To remove the last element of array
myArr.unshift(9)
myArr.shift()
console.log(myArr.includes(9));
console.log(myArr.indexOf(9));//-1 shows the value is not present in the array
console.log(myArr.indexOf(4));//-1 shows the value is not present in the array

console.log(myArr);
const newArr = myArr.join()
console.log(newArr);
console.log(typeof newArr);

//slice and splice
console.log("A",myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3)
console.log("C",myArr);
console.log(myn2);

const myn3 = Akatsuki.splice(1,3)
console.log(myn3);
console.log("D",Akatsuki);








