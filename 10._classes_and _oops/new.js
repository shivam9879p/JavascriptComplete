// NEW keyword

function multiplyBy5(nums){
    return nums*5
}

multiplyBy5.power = 2;
console.log(multiplyBy5(5));
console.log(multiplyBy5.power); // function is also an object as well as function
console.log(multiplyBy5.prototype);

function createUser(username, score) {
    this.username = username;
    this.score = score;
    
}

createUser.prototype.increment = function() {
    this.score++;
    
}

createUser.prototype.printMe = function () {
    console.log(`Price  is ${this.score}`);
    
}

const chai = new createUser("chai", 25);
// const tea = new createUser("tea", 250);

chai.printMe()
