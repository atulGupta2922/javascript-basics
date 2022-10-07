class Vehicle {
    constructor(wheels, engine, fuelType, seating){
        this.wheels = wheels;
        this.engine = engine;
        this.fuelType = fuelType;
        this.seating = seating;
        this.mobility = null;
    }
    vehicleInMotion(mob) {
        this.mobility = mob;
    }
}

class Car extends Vehicle{
    constructor (make, model, color, fuelType, seating, isConvertible= false) {
        super(4, true, fuelType, seating);
        this.make = make;
        this.model = model;
        this.color = color;
        this.isConvertible  = isConvertible;
        this.roof = 'close';
    }

    convertRoofTop = () => {
        if(this.isConvertible) {
            (this.roof === 'open') ? this.roof = 'close' : this.roof = 'open';
            return "convertible";
        }
        return "car is not convertible, go and buy an expensive car.";
    }
}

class Sedan extends Car{
    constructor(bootSpace, seats){
        super('Hindustan Motors', 'Ambassador', 'white', 'electricity', seats);
        this.bootSpace = bootSpace;
    }
}

class Cycle extends Vehicle{
    constructor(make, model){
        super(2, false, 'none', 1);
        this.make = make;
        this.model = model;
    }
}

let cycle = new Cycle('hercules', 'Top Gear');
console.log(cycle);


let ambCar = new Sedan('500lt', 5);
console.log(ambCar);
