class Vehicle {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk(){
        return "BEEP!!";
    }
    toString(){
        return `Current vehicle info. Make: ${this.make}, Model: ${this.model}, Year: ${this.year}.`;
    }
}

class Car extends Vehicle{
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle{
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine(){
        return "VROOM!!!";
    }
}

class Garage {
    constructor(cap){
        this.vehicles = [];
        this.capacity = cap;
    }
    add(newVehicle){
        // if not a vehicle, return “Only vehicles are allowed in here!”
        if (!(newVehicle instanceof Vehicle)){
            return "Only vehicles are allowed in here!";
        }
        //if the garage is at capacity, "Sorry, we’re full.""
        if(this.vehicles.length >= this.capacity){
            return "Sorry, we're full."
        }
        this.vehicles.push(newVehicle);
        return "Vehicle added!"
    }
}