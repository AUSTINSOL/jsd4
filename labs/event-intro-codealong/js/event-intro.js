// Setup
var counter = 0;

// Elements
var main = document.querySelector("main");

// Create Element
var p = document.createElement('p');
p.innerHTML = counter;
main.appendChild(p);


// Create Event
var me = document.createEvent("MouseEvent");
me.initEvent("click");

// Event Listeners
// main.addEventListener("click", count);
p.addEventListener("click", clickCircle);


// Event handler callback function
function clickCircle(event) {
	console.log(event);
	counter++;
	p.innerHTML = counter;
	console.log("type",x.type);
	console.log("target",x.target);
	console.log("content",x.target.innerHTML);
}
document.body.style.height = '500px';
document.body.addEventListener('click', function(e){
var self = this,
    old_bg = this.style.background;
    this.style.background = this.style.background=='green'? 'yellow':'green';
    // setTimeout(function(){
    //     self.style.background = old_bg;
    // }, 1000);
})