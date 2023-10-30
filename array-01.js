// array

// static array
const myHeors = ["shaktiman", "naagraj", true, 10, 3.14]

// console.log(myArr);
// console.log(myHeors[2]);

// dynamic array

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr2[3]);


// Array methods

const myArr = [0, 1, 2, 3, 4, 5]

// push method is used to insert an element at the end of array
myArr.push(6)
myArr.push("name")
myArr.push(false)

// console.log(myArr);
// myArr.push(7)

// push method is used to delete last element of array
// let x = myArr.pop()
// console.log(x);
// console.log(myArr);

// unshift method is used to insert an element at the start of array
// myArr.unshift(9)
// console.log(myArr);

// shift method is used to remove first element of array
// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes("name1"));
// console.log(myArr.indexOf("name1"));

const newArr = myArr.join()

// join() method returns new string

// console.log(myArr);
// console.log(newArr);


// slice, splice

// console.log("A ", myArr);

const myn1 = myArr.slice(1, 5)

// console.log(myn1);
// console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);