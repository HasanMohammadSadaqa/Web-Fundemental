function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var s1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"])
console.log(s1); 
var s2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(s2);

var s2 = pizzaOven("deep dish", "marinara", ["mozzarella"], ["peper", "pepperoni", "chiken"]);
console.log(s2);

var s2 = pizzaOven("hand tossed", "traditional", ["cheder"], ["olives", "peper"]);
console.log(s2);

function randomPizza (){
}