/*Work with a partner to create a monkey object, which has the following properties:

* name
* species
* foodsEaten

And the following methods:
* eatSomething(thingAsString)
* introduce: producers a string introducing itself, including its name, species, and what it's eaten.

Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.

Exercise your monkeys by retrieving their properties and using their methods. Practice using both syntaxes
for retrieving properties (dot notation and brackets).

*/

function Monkey(name, species) {
	this.name = name;
	this.species = species;
	this.foodsEaten = [];
}

Monkey.prototype = {

	eatSomething: function(food) {
		console.log("eatSomething", food);
		this.foodsEaten.push(food);
	},
	introduce: function() {
	return "sup yo, i'm " + this.name "." + "I'm a " + this.species + ", who eats a shit ton of " + this.foodsEaten.join(" , ") + ".";	
	}

};

var monkey1 = new Monkey("jack", "howler");

