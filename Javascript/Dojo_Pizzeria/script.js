function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
var pizza3 = pizzaOven("thin", "light", "mozzarella", "buffalo chicken");
var pizza4 = pizzaOven("thin", "none", "mozzarella", ["garlic", "olive oil", "basil"]);

console.log(pizza1);
console.log(pizza2);
console.log(pizza3);
console.log(pizza4);


function randomPizza(){
    var crustType = ["none", "deep dish", "thin", "thick", "stuffed crust", "cardboard"];
    var sauceType = ["none", "marinara", "traditional", "light", "heavy", "orange juice"];
    var cheeses = ["none", "mozzarella", "parmesan", "goat", "plastic"];
    var toppings = ["none", "pepperoni", "anchovies", "broccoli", "peppers", "onions"];
    var pizza = {};
    pizza.crust = crustType[Math.floor(Math.random() * crustType.length)];
    pizza.sauce = sauceType[Math.floor(Math.random() * sauceType.length)];
    pizza.cheese = cheeses[Math.floor(Math.random() * cheeses.length)];
    pizza.topping = toppings[Math.floor(Math.random() * toppings.length)];
    return pizza;
}
console.log(randomPizza());