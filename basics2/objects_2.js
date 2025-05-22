// const tinderUser = new object() this is singletone object

const tinderUser = {}

tinderUser.id = "323aed"
tinderUser.name = "ronny"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {     // it is nested object
        userfullname: {
            firstname: "shivam",
            lastname: "pandey"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 =  {obj1,obj2}

// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1, ...obj2}
console.log(obj3);


console.log(tinderUser)

console.log(Object.keys(tinderUser)); 
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isloggedIn'));


// destructre of objects 


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor  // using . to access 

const {courseInstructor: Instructor} = course
console.log(Instructor);

// api


