// Setup
// ----------------------------------------------
var trafficLight = document.querySelector("#traffic-light");

// Structure
// ----------------------------------------------
var clear = function(){
	//remove class specifics from the traffic light
	trafficLight.classList.remove('stop');
  	trafficLight.classList.remove('go');
  	trafficLight.classList.remove('slow');
  
}

var stop = function() {
	console.log('stopping')
	//turns red light on and others off
	clearInterval(startCaution);
	clear();
	trafficLight.classList.add('stop');
}

var slow = function() {
	console.log('slowing')
	//turns yellow light on and others off
	clearInterval(startCaution);
	clear();
	trafficLight.classList.add('slow');
}

var go = function() {
	console.log('going')
	//turns green light on and others off
	clearInterval(startCaution);
	clear();
	trafficLight.classList.add('go');
}

var caution = function() {
	console.log('caution mode')
 	//flashes yellow light on and off
 	trafficLight.classList.remove('stop');
  	trafficLight.classList.remove('go');
	if (trafficLight.classList.contains('slow') === true) {
  		trafficLight.classList.remove('slow');
	}
	else {
		trafficLight.classList.add('slow');
	}
}

var startCaution = setInterval(caution,1000);

// Event handlers
// ----------------------------------------------
document.querySelector(".stop-button").addEventListener("click", stop)
document.querySelector(".slow-button").addEventListener("click", slow)
document.querySelector(".go-button").addEventListener("click", go)
document.querySelector(".caution-button").addEventListener("click", startCaution)



