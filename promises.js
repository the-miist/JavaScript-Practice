// let cakeBake = new Promise((resolve, reject)=>{
//     let isCakePrepared = false;
//     if(isCakePrepared) {
//         resolve("Cake is ready!");
//     } else {
//         reject("Sorry, Cake is not ready!");
//     }
// })

// cakeBake.then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("Prmise completed")
// })

// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then((response)=>{
//         response.json().then((data)=>{
//             console.log(data);
//         })
//     }).catch((error)=>{
//         console.log(error)
// })


function getCake() {
    let cakeBake = new Promise((resolve, reject)=>{
        let isCakePrepared = false;
        if(isCakePrepared) {
            resolve("Cake is ready!");
        } else {
            reject("Sorry, Cake is not ready!");
        }
    })
    return cakeBake;
}

async function getCakeResult() {

    try {
        let data = await getCake();
        console.log(data);
    } catch(error) {
        console.log(error);
    }
}

getCakeResult();


async function getData() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/todos');
        let json = await response.json();
        console.log(json);
    } catch(error) {
        console.log(error);
    }
}

getData();