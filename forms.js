let fName = document.getElementById("name")
let lName = document.getElementById("surname");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let submit = document.getElementById("submit");

submit.addEventListener("click", (event) => {
    event.preventDefault();
    submitForm();
})

function submitForm() {
    
    let name  = fName.value.trim();
    let surname = lName.value.trim();
    let mobile = phone.value.trim();
    let mail = email.value.trim();

    let isValid = true;

    let phoneRegex = /^[6-9]\d{2}[2-9]\d{2}\d{4}$/;
    let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if(name.length < 2 ) {
        isValid = false;
    }
    if(surname.length<3) {
        isValid = false;
    }
    if(!phoneRegex.test(mobile)) {
        isValid = false;
    }
    if(!emailRegex.test(mail)) {
        isValid = false;
    }

    if(isValid==false) {
        document.getElementById("invalid").style.display="block"
        document.getElementById("valid").style.display="none"
    } else {
        document.getElementById("valid").style.display="block"
        document.getElementById("invalid").style.display="none"
    }

}
