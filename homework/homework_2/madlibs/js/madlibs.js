// Setup / Data
// ------------------------------------------
var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
var startupIdea;
var favorites = [];
var favoritesText = [];


// Elements
// ------------------------------------------
var startup = document.querySelector('.startup');
var generate = document.querySelector('.generate');
var save = document.querySelector('.save');
var print = document.querySelector('.print');
var list = document.querySelector('.list');


// Events
// ------------------------------------------
generate.addEventListener('click', generateStartup);
save.addEventListener('click', saveFavorite);
print.addEventListener('click', printFavorites);


// Init
// ------------------------------------------
generateStartup();


// Event Listeners
// ------------------------------------------


// the generateStartup function is called when
// the "Generate New Startup" button is clicked
function generateStartup() {

    // TODO: generate two random index numbers, one for each array
    var randomStartupX = startupX[Math.floor(Math.random() * startupX.length)];
    var randomStartupY = startupY[Math.floor(Math.random() * startupY.length)];
    // TODO: concatenate the fixed text with the two random values
    //       to create a new startup idea like:
    //       "A startup that is Apple, but for Trello"
    startupIdea = "A startup that is " + randomStartupX + ", but for " + randomStartupY;
    // DONE: Update page with new startup idea
    startup.innerHTML = startupIdea;
}

// the saveFavorite function is called when
// the "Save Favorite" button is clicked
function saveFavorite() {

    // TODO: add the new idea to the array
    favorites.push(startupIdea);
    console.log(favorites)

}



// the Print Favorites function is called when
// the "Print Favorites" button is clicked
function printFavorites() {
    // DONE: clear out favorites section each time
    // before displaying new list of favorites
    list.innerHTML = '';

    // TODO: concatenate all the favorites into one string (did not finish)
    // - hint: loop through all the favorites
    for(var k = 0, length3 = favorites.length; k < length3; k++){
    	favoritesText + favorites[k] + "<br>";
    }

    // });

    // - this should be stored in a variable named favoritesText
    // - each favorite should have an html br element between it (EG: "<br>")

    


    // DONE: update the list element with the
    // new list of favorites
    list.innerHTML = favoritesText;
}
