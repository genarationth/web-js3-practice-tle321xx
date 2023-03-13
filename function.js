
// A B Function
function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if (b===0){
        return "Error: division by zero";
    } else {
        return a / b;
    }
}
let a = 10;
let b = 5;
console.log(add(a, b));
console.log(subtract(a, b));
console.log(multiply(a, b));
console.log(divide(a, b));

// Info Function
const myinfo = function(firstname,location,hobby){
    console.log("Hi, my name is " + firstname+ "I live in " + location + "and enjoy " + hobby);
}
myinfo ('title ', 'Bankok ','game ');















