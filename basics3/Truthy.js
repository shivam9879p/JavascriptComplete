const userEmail = "shivam.ai"

if(userEmail){
    console.log("got user email")
}else{
    console.log("Don't have user email")
}

// falsy values

// false,0,-0,BigInt 0n,"",null,undefined,NaN


// TRUTHY VALUES
// "0",'false', " ",[].{}, function()[]

// if(userEmail.length() === 0){
//     console.log("array is empty");
// }

// const emptyobj =  {}

// if(Object.keys(emptyobj).length === 0){
//     console.log("object is empty");
// }

// Nullish coalescing operation (??): null undefined
// it is only for null and undefined
let val1;

// val1 = 5 ?? 10
val1 = null ?? 10

console.log(val1);

// Terniary operator

// condition ? true : false

const iceTeaPrice =100;

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
