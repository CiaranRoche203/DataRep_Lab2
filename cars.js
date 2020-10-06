class Vehicle{
    //vehicle class taking 3 parameters
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    //information of the car method
    Information(){
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }
}
//let myVehicle = new Vehicle('VW', 'golf', 2000);
//let info = myVehicle.Information();
// cars class that inherites from vehicles 
class Cars extends Vehicle{
    //takes the orighinal 3 parameters as well as a new one
    constructor(make, model, year, doors){
        super(make, model, year);
        this.doors = doors;
    }
    //information method that displays the output
    Information(){
        super.Information();
        console.log(`Doors: ${this.doors}`);
    }
}
//taking the information that is to be displayed
let myCar = new Cars('VW', 'Golf', 2009, 5);
//calling the method
myCar.Information();