// Elements
// ------------------------------------------
var date      = document.querySelector('.date');
var games     = document.querySelector('.games');
var dateTemplate = document.querySelector('#date-template')
var gameTemplate = document.querySelector('#game-template')



// Templates
// var templateFn = Handlebars.compile(dateTemplate.innerHTML);
var templateFn = Handlebars.compile(gameTemplate.innerHTML);


// Date Template
// Handlebars step 3:
// var html = templateFn(mockdata);
// date.innerHTML = html;

var html = templateFn(mockdata.games);
games.innerHTML = html;
	
// Game Template

// function getGames() {
// 	var templateFn = Handlebars.compile(games.innerHTML);

// 	// Handlebars step 3:
// 	var html = templateFn();
// 	results.innerHTML = html;
// }
// getGame();

