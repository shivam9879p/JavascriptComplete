// Prototype begins 

let myName = "hitesh    ";
let myChannel = "chai   ";

console.log(myName.truelength);


let myHeros = ["thor", " spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`spidey power is ${this.spiderman}`)
        
    }
}

Array.prototype.hihitesh = function(){
    console.log(`hitesh is only present in myheroes`)
}

Object.prototype.hitesh = function () {
    console.log(`hitesh is present in all objects`);
    
}

// heroPower.hitesh();
//  myHeros.hitesh();
myHeros.hihitesh();

const User ={
    name:"chai",
    email: "@gmil.com"
}


const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailabe: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport

}

Teacher.__proto__ = User;

//modern syntax 

Object.setPrototypeOf(TeachingSupport,Teacher);

let anotherUserName = "ChaiAurCode     "

String.prototype.truelength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is  ${this.trim().length} ` );
}

anotherUserName.truelength();
"Shivampandey".truelength();
"mynameis   ".truelength();