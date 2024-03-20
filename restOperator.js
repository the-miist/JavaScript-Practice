let student = {
    name:"Divyesh",
    surname:"Pithadiya",
    address:{
        city:"Mumbai",
        state:"MAH"
    },
    salary:4000
}

// let name = student.name;
// let surname = student.surname;
// let otherDetails = { address:student.address, salary:student.salary }; 

let { name:fName, surname:lName, ...otherDetails } = student 

console.log(fName);
console.log(lName);
console.log(otherDetails)

let arr = [1,2,3,4,5];
let [a, b, ...c] = arr;
console.log(a);
console.log(b);
console.log(c);

let student2 = {
    subjects: ['js', 'java', 'nodejs'],
    hobbies:['Dance', 'Rap'] 
}

let details = {...student, ...student2}
// {name:'', salary:'', surname:'', address:{}, subjects:[], hobbies:[]}
console.log(details)


let frontend = ['html', 'css', 'js', 'react'];
let backend = ['nodejs', 'express'];
let database = ['mongodb'];

let mern = [...frontend, ...backend, ...database];
console.log(mern) 