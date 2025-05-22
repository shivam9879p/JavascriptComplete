// document.getElementById('title').getAttribute('id')
// 'title'
// document.getElementById('title').setAttribute('class','test')
// undefined
// document.getElementById('title').setAttribute('class','test heading')
// undefined
// document.getElementById('title')
// <h1 id=​"title" class=​"test heading">​Dom learning on chai aur code ​</h1>​
// const title = document.getElementById('title')
// undefined
// title
// <h1 id=​"title" class=​"test heading">​Dom learning on chai aur code ​</h1>​
// title.style.backgroundco
// undefined
// title.style.backgroundColor = 'green'
// 'green'
// title.style.padding ="15px"
// '15px'
// title.style.borderRadius ="15px"
// '15px'



// difference btw innertext , textcontent , innerhtml


// title.innerText
// 'Dom learning on chai aur code'
// title.textContent
// 'Dom learning on chai aur code  test text '
// title.innerText
// 'Dom learning on chai aur code'
// title.innerHTML
// 'Dom learning on chai aur code <span style="display: none;"> test text </span>'






// const templiLis = document.querySelectorAll('li')
// undefined
// templiLis.style.color = 'gren'
// VM1725:1 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
//     at <anonymous>:1:23
// (anonymous) @ VM1725:1Understand this error
// templiLis[0].style.color = 'gren'
// 'gren'
// templiLis[0].style.color = 'green'
// 'green'
// templiLis[1].style.color = 'red'
// 'red'
// templiLis[2].style.color = 'yellow'
// 'yellow'
// templiLis[2].style.color = 'yellow'
// 'yellow'
// templiLis[2].style.color = 'pink'
// 'pink'



// templiLis.forEach(function (l) {
//     l.style.backgroundColor = 'pink'
// })



// how to convert html collectiont to array 

// const myConvertedArray = Array.from(temClassList)

// myConvertedArray.forEach(function (li){
//     li.syle.color = 'orange'
// })
// VM2654:2 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
//     at <anonymous>:2:19
//     at Array.forEach (<anonymous>)
//     at <anonymous>:1:18
// (anonymous) @ VM2654:2
// (anonymous) @ VM2654:1Understand this error999876234
// myConvertedArray.forEach(function (li){
//     li.style.color = 'orange'
// })