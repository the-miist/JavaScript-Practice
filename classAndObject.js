class Fruit {
    // class variables
    name;
    quantity;

    constructor(name, quantity) {
        this.name=name;
        this.quantity=quantity;
    }

    getDetails() {
        console.log(this.name);
        console.log(this.quantity);
    }

}

let mango = new Fruit("Mango", 12);
mango.getDetails();


let orange = new Fruit("Orange", 5);
orange.getDetails();