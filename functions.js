// regular function
function hello() {
    console.log("Hello");   
}

hello();

// Param function
function getSum(a, b) {
    return a+b;
}

let sum = getSum(2,2);
console.log(sum);

// Anom. function
let multi = function (a, b) {
    return a*b;
}

let multiRes = multi(2, 5);
console.log(multiRes);

// Arrow function
let div = (a, b) => {
    return a/b;
}

console.log(div(10, 5));


// Built-in functions

let data = "Divyesh Pithadiya";
console.log(data.charAt(2));
console.log(data.concat(", Software Engineer"));
console.log(data.toLowerCase());
console.log(data.toUpperCase());
console.log(data.startsWith("Div"));
console.log(typeof data)