//IF
// <,>,<=,>=,==,===,!=,!==

const name ="shivam"

let isuserloggedin = true;

if(isuserloggedin){
    console.log(`my name is ${name}`)
    console.log("my name is shivam")
}
isuserloggedin = false;
if(isuserloggedin == true){
    // will not execute
    console.log("true  hai bhai")
}
else{
    console.log("false hai bhai")
}

const score = 200

// if(score > 100){
//         const power = "fly"
//         console.log(`user power: ${power}`);
// }

//console.log(`usr power: ${power}`)

const balance = 1000

if( balance > 500) console.log("test"),console.log("test2");


// && if both statement is true

const USL = true;
const W1 = true;
const W2 = false;

if(USL && W1){
    console.log("allow to buy course");
}


// || if one will true 

if(USL || W2){
    console.log("user will login");
}

