//object literals

// const user = {
//     username: "shivam",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         // console.log("Got user details from database");
//         // console.log(`Username: ${this.username}`);
//         console.log(this)
//     }

// }


// console.log(user.username);
// // console.log(user.getUserDetails());
// console.log(this);


// CONSTRUCTOR


function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
    }

    // return this;
}

const userOne = new User("hitesh", 12, true);
const userTwo = new User("chaiaurcode",15,false); //if i will not use new then it will overwrite the data 
// console.log(userOne);
// console.log(userTwo);
console.log(userOne.constructor);

