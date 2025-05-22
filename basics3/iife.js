// IIFE (Imediately Invoked function expressions)
// global scope ke pollution se problem hoti hai kai bar for that we use iife


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

// chai()

(  (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
}

)('shivam')