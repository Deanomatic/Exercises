var meat = document.getElementById("meats");
var bread = document.getElementById("breads");
var veggie = document.getElementById("veggies");
var cheese = document.getElementById("cheeses");
var condiment = document.getElementById("condiments");
var totalCost = document.getElementById("price");
var meat = document.getElementById("meats");
var endPrice = document.getElementById("output-area");
var chosenToppings;
var priceButton = document.getElementById("price")

veggie.addEventListener("change", function(event) {
		chosenToppings = event.target.id;//this targets the id that triggers the event. then 
	if (event.target.checked === true) {
		chosenToppingPrice = sandwichMaker.getVegCost(chosenToppings);
		 sandwichMaker.addTopping(chosenToppingPrice);
	} else if (event.target.checked === false) {
		chosenToppingPrice = sandwichMaker.getVegCost(chosenToppings);
		 sandwichMaker.subtractTopping(chosenToppingPrice);

	}
		endPrice.innerHTML = sandwichMaker.finalPrice().toFixed(2);
		
});

bread.addEventListener("change", function(event) {
	console.log("event",event)
		chosenToppings = event.target.id;
	if (event.target.checked === true) {
		chosenToppingPrice = sandwichMaker.getBreadCost(chosenToppings);
		sandwichMaker.addTopping(chosenToppingPrice);
	} else if (event.target.checked === false) {
		chosenToppingPrice = sandwichMaker.getBreadCost(chosenToppings);
		 sandwichMaker.subtractTopping(chosenToppingPrice);

	}
		endPrice.innerHTML = sandwichMaker.finalPrice().toFixed(2);
});

meat.addEventListener("change", function(event) {
		chosenToppings = event.target.id;
	if (event.target.checked === true) {
		chosenToppingPrice = sandwichMaker.getMeatCost(chosenToppings);
		sandwichMaker.addTopping(chosenToppingPrice);
	} else if (event.target.checked === false) {
		chosenToppingPrice = sandwichMaker.getMeatCost(chosenToppings);
		 sandwichMaker.subtractTopping(chosenToppingPrice);

	}
		endPrice.innerHTML = sandwichMaker.finalPrice().toFixed(2);
});

cheese.addEventListener("change", function(event) {
		chosenToppings = event.target.id;
	if (event.target.checked === true) {
		chosenToppingPrice = sandwichMaker.getCheeseCost(chosenToppings);
		sandwichMaker.addTopping(chosenToppingPrice);
	} else if (event.target.checked === false) {
		chosenToppingPrice = sandwichMaker.getCheeseCost(chosenToppings);
		 sandwichMaker.subtractTopping(chosenToppingPrice);

	}
		endPrice.innerHTML = sandwichMaker.finalPrice().toFixed(2);
});

condiment.addEventListener("change", function(event) {
		chosenToppings = event.target.id;
	if (event.target.checked === true) {
		chosenToppingPrice = sandwichMaker.getConCost(chosenToppings);
		sandwichMaker.addTopping(chosenToppingPrice);
	} else if (event.target.checked === false) {
		chosenToppingPrice = sandwichMaker.getConCost(chosenToppings);
		 sandwichMaker.subtractTopping(chosenToppingPrice);

	}
		endPrice.innerHTML = sandwichMaker.finalPrice().toFixed(2);
});

