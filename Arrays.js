// 1-D array
let nums = [1, 2, 3, 4, 5];
console.log(nums);

for(let i=0; i<nums.length; i++) {
    console.log(nums[i]);
}

let data = [1, "Divyesh", true, {city:"Mumbai", state:"MAH"}];
console.log(data[3]);

// Multi-D array
let multiDim = [1,2,3,[4,5,6,[7,8,9]]];
console.log(multiDim[3][3][2])

// Methods
let res = nums.concat(6,7,8);
console.log(res);

nums.push(6,7);
console.log(nums)

nums.pop();
console.log(nums);

let nums2 = nums.map((e)=>{
    return e*2;
})

console.log(nums2)

let products = [
    {name:"polo", price:300},
    {name:"gucci", price:4000},
    {name:"Adidas", price:300},
    {name:"Reebok", price:1000}
]

let bill = products.filter((prod)=>{
    return prod.price>=300 && prod.price<=1000;
}).reduce((bill, pr)=>{
    return bill+pr.price
}, 0);

console.log("Bill: "+bill);

let tshirts = products.filter((prod)=>{
    return prod.price>=300 && prod.price<=1000;
})

console.log(tshirts);

data = [1,2,3,4,5];
// let sum =0;
// for(let i=0; i<data.length; i++) {
//     sum=sum+data[i];
// }
// console.log("sum: "+sum);

let mul = data.reduce((multi, e)=>{
    return multi*e;
}, 1)

console.log("Multi: "+mul)