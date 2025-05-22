//ES6

// class User{
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPssword(){
        
//             return `${this.password}abc`
        
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }

// }

// const chai = new User("chai", "chai@gmai.com","123")

// console.log(chai.encryptPssword());
// console.log(chai.changeUsername());

// behind the scene

function User(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;

}

User.prototype.encryptPssword = function(){
    return `${this.password}abc`;
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`;
}

const tea = new User("Tea", "Tea@gmail.com" , "Tea234");

console.log(tea.changeUsername());
console.log(tea.encryptPssword());

