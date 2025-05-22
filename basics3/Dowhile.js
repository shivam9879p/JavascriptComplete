// while
let i =0;

while(i<10){
console.log(i);

i++;
}


// do while
let score =1;
do{
console.log(`score is ${score}`);
score++;
}
while(score <= 10);


// for of loops

const arr = [1,2,3,5,6]

// for (const num of arr) {
//     console.log(num);
// }

const greeting = "hello world!"



// for (const greet of greeting) {
//     console.log(`Each char is ${greet}`)
    
// }


//Maps

const map = new Map();
map.set("IN","India")
map.set("USA","United states of america")
map.set("UK","UNITED KINGDOM")

//console.log(map);

// FOR OF IN MAP 
// for (const [key,value] of map) {
//     console.log(key, ':-', value);
    
// }

// IT IS ONLY FOR UNIQUE VALUES
const myobject ={
    'game1': 'NFS',
    'game2': 'spiderman'
}

// for of  not iterable for objec

// for (const [key,value] of myobject) {
//     console.log(key, ':-', value);
    
// }

// for in 

// for (const key in myobject) {
//     console.log(`${key} shortcut is for ${myobject[key]}`)
// }


// for in loop in array

const programming = ['js','cpp','rupy','java'];

for (const key in programming) {
    console.log(programming[key]);
}

