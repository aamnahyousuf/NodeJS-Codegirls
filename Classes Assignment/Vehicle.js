class Vehicle{
    constructor(brand, model){
        this.brand = brand;
        this.model = model;
    }
    start(){
        return "Car started: Vroom Vroom!";
    }
}

class Car extends Vehicle {
    constructor(brand, model, fuel){
        super(brand, model);
        this.fuelType = fuel;
    }
    carInfo(){
        return [this.brand, this.model, this.fuelType];
    }
}

const Mercy = new Car ("Merecedes", 2014, "Diesel")
console.log(Mercy.start());
console.log(Mercy.carInfo());