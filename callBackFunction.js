function getSum(a, b, logSum) {
    let sum = a+b;
    logSum(sum);
}

getSum(2,3, (sum)=>{
    console.log(sum);
})