// Structure
// ------------------------------------------
var input = document.querySelector('.age-check input');
var button = document.querySelector('.age-check button');
var p = document.querySelector('.age-check p');


// Events
// ------------------------------------------
button.addEventListener('click', checkAge);


// Event Listeners
// ------------------------------------------

function checkAge(e) {
    var age = parseInt(input.value);
    var privilege = getPrivilege(age);
    displayPrivilege(privilege);
}


// Update page functions
// ------------------------------------------
function displayPrivilege(privilege) {
    p.innerHTML = privilege
}

// Determine the privilege to display
// ------------------------------------------

// TODO: write the getPrivilege function here
function getPrivilege(age) {
    if (age < 16) {
        return "you cannot do much outside of going to school fool";
    } else if (age >= 16 && age < 18) {
        return "you can drive fool";
    } else if (age >= 18 && age < 21) {
        return "you can vote fool";
    } else if (age >= 21 && age < 25) {
        return "you can drink fool";
    } else if (age >= 25 && age < 35) {
        return "you can rent a car fool";
    } else if (age >= 35 && age < 62) {
        return "you can run for pres fool";
    } else {
        return "you old af";
    }
}
