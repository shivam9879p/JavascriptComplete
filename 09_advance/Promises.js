// const promiseOne = new Promise(function(resolve, reject) {
//     // Do an async task 
//     // DB calls, cryptography,network
//     setTimeout(function(){
//         console.log('Async task is complete')
//         resolve()
//     },2000)
// })

// promiseOne.then(function(){
//     console.log("Promise Consumed")

// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Asnyc task 2");
// resolve()
//     },1000)

// }).then(function(){
//     console.log("Async 2 resolved");
// })

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "Chai",email:"chai@example.com"}) // we can pass object in resolve 

//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user);

// })


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"shivam",password:"3456"})
        }else{
            reject('ERROR: Something went wrong');
        }
    },1000)
})

 promiseFour.then((user) =>{
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username)

}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected "))


// const promisefive = new Promise(function(resolve,reject){

//     setTimeout(function(){
//         let error = false;
//         if(!error){
//             resolve({username:"javascript",password:"3456"})
//         }else{
//             reject('ERROR:  js went  wrong');
//         }
//     },1000)

// });

// async function consumePromiseFive(){
//     try{
//         const response = await promisefive
//     console.log(response);
//     } catch(error){
//         console.log(error);
//     }
// }

// consumePromiseFive();



// // async function getALLUsers(){
// //     try{
// //         const response = await fetch('https://api.github.com/users/hiteshchoudhary')
// //         // console.log(response);
// //     const data = await response.json()
// //     console.log(data);
// //     }
// //     catch(error){
// //         console.log("E: ", error);
// //     }
// // }

// // getALLUsers()


// fetch('https://api.github.com/users/hiteshchoudhary')
// .then((response) => {
//     return response.json();
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => console.log(error));


