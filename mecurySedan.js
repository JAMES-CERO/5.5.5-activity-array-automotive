//this includes the vehicle class as a module

//  const { Vehicle } = require("vehicle.js")
// const VehicleModule = require("./vehicleBaseClass").Vehicle

//This one import the claas from Vehicle.js
const VehicleModule = require('./vehicle').Vehicle


//The extend class adding custom features

class Car extends  VehicleModule  {
    constructor(make, model, year, color, mileage)

    
    {    
        
        super(make, model, year, color, mileage)
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }
        start(){
            if (this.fuel > 0 ) {
               console.log("Starting system... ")
                return this.started = true
            } else{
                console.log("refill gas")
            }
         }

        loadPassenger(num) {
             if (this.passenger < this.maxPassengers) {
                if ((num + this.passenger) <= this.maxPassengers) {
                    this.passenger = num;
                    return this.passenger;               
                } else {
                    console.log(this.model + " " + this.make + "do not have enough space.");
                }
             } else {
                console.log("This vehicle is full");
              }
            }
           
        

         checkService() {
            if (this.mileage > 30000) {            
                this.scheduleService = true
                return this.scheduleService;                       
                }
            }


 }

 // Carrito is a Spanish word for Little car

let Carrito = new Car("Tesla", "sedan", 2022, "black", 4000)  
Carrito.start()
Carrito.checkService()
Carrito.loadPassenger(3) 
Carrito.stop()
console.log(Carrito)





