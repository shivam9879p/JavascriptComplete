// for each loop

const coding = ['js','cpp','py','java']

coding.forEach(function (val) {
    console.log(val);
})  

coding.forEach( (item) =>{
    console.log(item);
})


// function printMe(item){
//     console.log(item);
// }


// coding.forEach(printMe)

coding.forEach((item, index, arr) =>{
    console.log(item, index , arr)
})

const mycoding = [
    {
        languagename: "javascript",
        language: "js"
    },
    {
        langugename: "javascript",
        language: "js"
    },
    {
        langugename: "javascript",
        language: "js"
    }
]

mycoding.forEach( (item) =>{
    console.log(item.languagename);
}

)