class Vehicle {

    getVehicle() {
        return "Vehicle";
    }

}

class Bike extends Vehicle {
    getBike() {
        return "Bike";
    }
}

class Honda extends Bike {
    getHonda() {
        return "Honda";
    }
}

let honda = new Honda();
console.log(honda.getVehicle());