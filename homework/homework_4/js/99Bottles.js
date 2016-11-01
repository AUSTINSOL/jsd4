// Elements
// ------------------------------------------

var ul = document.querySelector(".bottles-of-beer");

function song(number) {
	var li = document.createElement("li");
	if (number == 1) {
		 var songLyric = number + " bottle of beer on the wall, " + number + " bottle of beer. <br>" +
        "Take one down and pass it around, no more bottles of beer on the wall. <br>"
    }
	else if (number == 0) {
		var songLyric = "No more bottles of beer on the wall, no more bottles of beer. <br>" +
        "Go to the store and buy some more, 99 bottles of beer on the wall. <br>"
	}
	else {
        var songLyric = number + " bottles of beer on the wall, " + number + " bottles of beer. <br>" +
        "Take one down and pass it around, " + (number - 1) + " bottles of beer on the wall. <br>"
    }
 	li.innerHTML = songLyric;
    ul.appendChild(li);
}

for (var i = 99; i > -1; i--) {
	song(i); 
}