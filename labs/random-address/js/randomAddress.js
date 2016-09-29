// Structure
// ------------------------------------------
var button    = document.querySelector('main button');
var addresses = document.querySelector('main .addresses');

// Events
// ------------------------------------------
button.addEventListener('click', addAddress);

// Setup
// ------------------------------------------
// TODO: create your arrays here (street, city, state, etc)
var streetName = ["Bummer Ave","Sup Lane", "Howdy Street", "Ghetto Drive"];
var streetNumber =  [201, 420, 101, 10000];
var cityName = ["Los Angeles", "San Francisco", "Oakland", "Honolulu"];
var postalCode = [90035, 94606, 12345, 10010];
var address = "!";	


// Event Listeners
// ------------------------------------------
function generateAddress(e) {	
	// TODO: randomly select one item from each of these arrays 
	//       and then use them to construct a random address
	var randStreetNumber = streetNumber[Math.floor(Math.random() * streetNumber.length)];
	var randStreetName = streetName[Math.floor(Math.random() * streetName.length)];
	var randCityName = cityName[Math.floor(Math.random() * cityName.length)];
	var randPostalCode = postalCode[Math.floor(Math.random() * postalCode.length)];
	address = randStreetNumber + " " + randStreetName + ", " + randCityName + ", " + randPostalCode;
}

// Update page functions
// ------------------------------------------
function addAddress(e) {
	generateAddress();
	var li = document.createElement('li');
	// console.log ("the address is", address)
	li.innerHTML = address;
	addresses.appendChild(li);
}

