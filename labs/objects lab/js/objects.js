// var flight = {
//     origin: "SFO",
//     destination: "DEN",
//     wifi: false,
//     distance: 800,
//     status: "delayed"
// }

// var car = {
//     make: "=Subaru",
//     model: "Forester",
//     year: "2013",
//     color: "green",
//     insurance: {
//         provider: "Geico",
//         policy: 3263746
//     },
//     miles: 45700,
//     speed: 0,
//     on: "false",
//     addMile: function() {
//         this.miles++;
//         debugger
//     },
//     start: function() {
//         this.on = true;
//     }
// }

// var bmw = {
//     on: "false",
//     start: function() {
//         this.on = true;
//     }
// }


// Reporting software analyzes the snow removal performance of each snow plow driver in the city.

// A simulation predicts the behavior of the MBTA if ridership increases by 20%.

// A user is required to watch video training sessions as part of a recertification process and answer questions about them.

// A user on a cooking website enters the number of dinner guests, and the cooking website adjusts all the recipes accordingly.

// A user who had reserved a Zipcar arrives to find it has not been returned yet, and customer service transfers her reservation to an available car.

// A computer game allows the user to take the role of a unit commander or general at Gettysburg and simulates the battle based on his or her commands.

// A user searches for her reservation on a hotel website, and changes the arrival date and room type.


// var reservation = {

//     hotel: "Ace Hotel",
//     arrivalDate: "monday",
//     roomTypes: ["single", "penthouse", "double"],
//     changeRoom: function() {
//         roomTypes = ""
//     },
//     changeDate: function(){
//     	arrivalDate = 
//     }
// }

// var zipCars = {
//     car1: {
//         returned: false,
//         location: "x,y",
//     },
//     car2: {
//         returned: true,
//         location: "x,y",
//     },
//     carsAvailable: function() {
//         if (this.car1.returned == true) {
//             console.log("use car 1");
//         } else if (this.car2.returned == true) {
//             console.log("use car 2");
//         } else {
//             console.log("you're fucked.");
//         };
//     }
// }

// var party = {
// 	people:1,
// 	food: guac,
// }


// var guac = {
// 	avocados: 4,
// 	onions: 2,
// 	limes: 1,
// 	tomatoes: 4

// 	howMuchGuac: function () {
// 		party.people * this.avocados;
// 		party.people * this.onions;

// 	}
// }

///////////////////////////////
//practice//


//constructor
var Zipcar = function (status){
	this.status = status;
}

//prototype
Zipcar.prototype = {
    pickup: function(){
        if (this.status == "not available") {
            return "Car not available. Call customer service & complain";
        }
        if (this.status == "available") {
            this.status = "in use";
            return "Off you go!";
        }
    },
    return: function(){
        if (this.status == "in use") {
            this.status = "available";
            return "Hope you had a nice ride!";
        }
        else return "You are not driving";
    }
};



