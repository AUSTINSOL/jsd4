// 1. Once 
//  -timeout
//  -Method:
//  setTimeout()
//  -takes 2 args
// clearTimeout()
// 

//  2. Repeat 
//  -interval 
//  -Method:
//  setInterval()
// clearInterval()


// setTimeout(changeGreen, 3000);
// setInterval(changeYellow, 2000);
//setup
var color = "red";
var timeId;
var flasherId;

//regular
function changeColor(){
	if (color == "red"){
		color = changeGreen();
	} else if (color == "green") {
		color = changeYellow();
	} else {
 		color = changeRed();
	}
}

function changeGreen () {
	console.log('green');
	return "green";
}
function changeYellow() {
	alert('yellow');
	return "yellow";
}
function changeRed() {
	console.log('red');
	return "red";
}
function changeOff() {
	console.log('off');
	return "off";
}

function nightMode (argument) {
	if (color == "yellow"){
		color = changeOff();
	} else { 
		color = changeYellow();
	}
}
//flasher
function flasher(){
	changeYellow();
	stop();
	flashId = setInterval(nightMode,1500);
}

//start
function start() {
	clearInterval(flasherId);
	timeId = setInterval(changeColor, 2000);
}
//stop
function stop() {
	clearInterval(timeId); 
}
