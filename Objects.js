let student = {
    name:"Divyesh",
    surname:"Pithadiya",
    email:"d@gmail.com",
    address:{
        city:"Mumbai",
        state:"MAH"
    },
    skills:["java","js"],
    isEmployeed: true,

    getStudent:function () {
        console.log(this);
    }
}

console.log(student.name);
student.getStudent();