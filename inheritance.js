class Bank {

    bankName = "BOB";
    noOfEmployees = 250;

    getBank() {
        console.log(this.bankName);
        console.log(this.noOfEmployees);
    }
    
    constructor() {
        console.log("Bank");
    }

}

class Bob extends Bank{
    constructor() {
        super();
    }
}

let bob = new Bob();
bob.getBank();