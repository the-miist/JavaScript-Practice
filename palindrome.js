let num = 141;
let original = num;
let rev = 0;

while(num!=0) {
    let rem = num % 10;
    rev = rev*10 + rem;
    num = Math.floor(num/10);
}

console.log("Reverse: "+rev);

if(original==rev) {
    console.log("Palindrome")
} else {
    console.log("Not palindrome")
}