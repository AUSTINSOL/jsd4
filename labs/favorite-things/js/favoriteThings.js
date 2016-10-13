// Elements
// ------------------------------------------
var form = document.querySelector("body form");
var things = document.querySelector(".things");
// var thing = document.querySelector(".new-things");

// Events
// ------------------------------------------
form.addEventListener('submit', createThing);


// Update page
// ------------------------------------------
function createThing(e) {
	e.preventDefault();
	console.log('createThing');
	var thing = document.querySelector(".new-thing");
	if (!thing.value) {
		alert("you must type in a value");
		return;
	} 
	console.log("got here");
	//1. create element
	var li = document.createElement("li");
	console.log("created element");
	//2. add content & attributes
	li.innerHTML = thing.value;
	//3.add the new element to the DOM
	things.appendChild(li);
	//cleanup
	thing.value = "";
}
