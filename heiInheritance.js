class Bank {

    getBank() {
        return "Bank";
    }

}

class Sbi extends Bank{
    getSbi() {
        return "SBI";
    }
}

class Axis extends Bank{
    getAxis() {
        return "Axis";
    }
}


class Bob extends Bank{
    getBob() {
        return "BOB";
    }
}

let bob = new Bob();
console.log(bob.getBank());

let axis = new Axis();
console.log(axis.getBank());