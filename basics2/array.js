//ARRAYS 

const myArr = [1, 2, 3, 4, 5,];

const myHeros = ["tony", "captain", "shivam"]

console.log(myArr[0]);
console.log(myHeros.length);

const rray = new Array(3,5,6,6,3,3);
//console.log(rray)

// Array methods

myArr.push(6)
myArr.push(7)
myArr.pop()
// myArr.unshift(9)
myArr.shift()
// myArr.shift()

//console.log(myArr.includes(9)) // will give true or false as per availability

//console.log(myArr);

const newarray = myArr.join()  // this join will convert array to string 
//console.log(typeof(newarray))

// difference between splice and slice 

console.log("A ", myArr)

const narr = myArr.slice(1,3) 
console.log(narr)

console.log("B ", myArr)

const marr = myArr.splice(1,4)
console.log(marr)
console.log(myArr)