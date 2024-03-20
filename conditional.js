let age=20;

// If else 
if (age>=18){
    console.log("Age is valid");
}else{
    console.log("Age is invalid");
}

let a=10;
let b=6;
let c=15;

// If else Lader
if(a>b){
    if(a>c){
        console.log("a is greatest");
    }else{
        console.log("c is greatest");
    }
}
if(b>a){
    if(b>c){
        console.log("b is greatest");
    }else{
        console.log("c is greatest");
    }
}

// If & Else-if
// enter op=1.sum,2.sub,3.mul,4.div
let op=2;
if(op==1){
    console.log(a+b);
}else if(op==2){
    console.log(a-b);
}else if(op==3){
    console.log(a*b);
}else if(op==4){
    console.log(a/b);
}else{
    console.log("Invalid Input");
}

// Switch Case

switch(op){
    case 1: console.log(a+b);
            break;
    case 2: console.log(a-b);
            break;
    case 3: console.log(a*b);
            break;
    case 4: console.log(a/b);
            break;
    default: console.log("Invalid Input");
}

let name = prompt("Hey! Whats Your Age?");
// name =Number.parseInt(name);
// alert(name)