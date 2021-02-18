const car = {
    brand: "Audi",
    color: "Szare",
    numberOfKilometers: 0,
    printCarInfo: function () {
        console.log(this.color + " " + this.brand + ", " + this.numberOfKilometers + "km");
    },
    drive: function (distance) {
        this.numberOfKilometers += distance;
        }
}

car.printCarInfo();
car.drive(200);
car.printCarInfo();

car.services = ["01.01.2010","01.01.2012","01.01.2012" ]
car.addService = function (date){
    this.services.push(date);
}
car.printService = function (){
    console.log(`Samochód ${this.brand} przeszedł następujące przeglądy
    ${this.services}`);;
}
car.printService();

car.addService("01.01.2013");

car.printService();
