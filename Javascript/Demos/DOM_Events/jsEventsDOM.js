// DOM is Document Object Model
// everything on the web page is part of an object


// Document Object Model DOM
// leverage the "this" keyword
// alert("This is coming from jsEventsDOM.js!");
// console.dir(this);
// this "this" refers to the window
// var title = document.querySelector("#title");
// you can grab an element and store it in a variable
// console.log(title);

// set variable for sanic to be able to remove it?
var sanic = document.querySelector("#sanic");



// or you can change them
// title.innerHTML = "I have changed you!";
// innerHTML changes the inner html of the document
// title.style.backgroundColor = "red";


// toggle function for buttton
function toggle(element){
    element.remove();
}

// remove picture
function remove(element) {
    element.remove();
}


// JS objects (car) have properties (color, size) and methods [things that they can do] (drive, park)
// methods are like functions (arr.push())
// methods need parentheses, even if there is no argument entered

// dot notation
var myArray = [1, 2, 3, 4];
myArray.push(5);
myArray.length;

// .length is a property, not a method
// properties do not need parentheses

// object literals
// use {} separate with ,
var myCar = {
    // this is a key value pair, use :
    numWheels: 4,
    // numWheels is the key, 4 is the value
    make: "Jeep",
    model: "Wrangler",
    // any data type as the value
    isNew: false,
    // you can also use quotation marks around a key
    "isFast": true,

    // we can also define methods
    // name: function(){code block}
    // still separate with commas
    drive: function() {
        console.log("Driving...")
    },
    showStats: function(){
        console.log(`Your car has the following characteristics:\n# of wheels: ${myCar.numWheels}`)
        // or special keyword "this"
        console.log(`Your car has the following characteristics:\n# of wheels: ${this.numWheels}`)
    }
}

// reference these properties with brackets and quotation marks
// bracket notation
console.log(myCar["make"]);
myCar["model"] = "Rubicon";

// or dot notation
myCar.numWheels = 2;
console.log(myCar.model);

myCar.drive();
myCar.showStats();

