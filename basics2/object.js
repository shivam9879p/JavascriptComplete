// singleton 
// object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Shivam ",
    "full name": "shivam pandey",
    //mySym: "mykey1",  // it is a string type not symbol type
   [mySym]: "mykey1", 
    age: 18,
    location: "Jaipur",
    email: "Shivampandey@gmail.com",
    isLoggedIn: false,
    lastLoginDaysK: ["monday","saturday"]


}

//Object.freeze(JsUser) // to freeze the changes if anyone want to change 
JsUser.email = "shivam@gmail.com"


//example of object if you want to create any
const person = {
    name: "Ansh",
    age: 13,
    school: "kvs"

}


console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])  


// How to make a functionin objects
JsUser.greeting = function(){
    console.log("hello js user");
}

JsUser.greetingTwo = function(){
    console.log(`hello ${this.name}`);
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())