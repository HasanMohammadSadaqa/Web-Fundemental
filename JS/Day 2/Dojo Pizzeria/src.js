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

var s3 = pizzaOven(["mozzarella"],"deep dish", ["peper", "pepperoni"],"marinara");
console.log(s3);

var s4 = pizzaOven("hand tossed", "cheder", ["olives", "peper"],"traditional");
console.log(s4);

function randomPizza (){
}