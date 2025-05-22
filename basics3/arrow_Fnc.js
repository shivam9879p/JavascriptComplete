const user ={
    username: "Shivam",
    price: 999,

    WelcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this)
    }


}
// this :- it is used for current context

// user.WelcomeMessage()
// user.username = "sam"

// user.WelcomeMessage()

// console.log(this)

// function chai(){
//     let username = "shivam pandey"
//     console.log(this.username); 
//     //  this can not be used inside funciton

// }

// const chai = function (){
//     let username = "shivam pandey"
//     console.log(this.username); 
//     //  this can not be used inside funciton

// }



// chai()


// *****************ARROW FUNCTION*****************************


const chai =  () => {
    let username = "shivam pandey"
    console.log(this.username); 
    //  this can not be used inside funciton

}

// chai()

// const addTwo =(num1, num2) => {
//     return num1 + num2

// }

// *****************IMPLICIT RETURN FUNCTION **********

// const addTwo =(num1, num2) => num1 + num2
// const addTwo =(num1, num2) => (num1 + num2)

const addTwo =(num1, num2) => ({usernaem: "shivam"})

console.log(addTwo(2,4));

const myArray = [2,4,5,5,6]

myArray.forEach