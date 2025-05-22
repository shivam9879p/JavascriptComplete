// let a = 10 
// const b = 20
// var c = 30  var is always a global scope 

let a = 300;

if (true) {         // it is block scope
    let a = 10 
    const b = 20
    var c = 30 
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "shivam"


    function two(){
        const website = "youtube"
        console.log(username);
    }

    // console.log( website);

    two()
}

// one()


if (true){
    const username = "shivam"
    if(username === "shivam"){
        const website = "YoUTUBE"
        console.log(username + website);
    }
    // console.log(website)
}

// console.log(username);

///////////////////////////////////////////////////////////////

console.log(addone(3))

function addone(num){
    return num+1;
}


// addone(3);

addTwo(5)

const addTwo = function(num){
    return num+2;
}

// addTwo(5)