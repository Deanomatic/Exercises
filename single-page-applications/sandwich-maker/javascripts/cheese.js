var sandwichMaker = (function(originalSandwich){
	var cheeseCost = {
		"pepperjack": 7.00,
		"cheddar":10.00,
		"smoked-gouda": 15.00,
		"manchego": 2.00
	}
	originalSandwich.getCheeseCost = function(cheese) {
		return cheeseCost[cheese];
	}
	return originalSandwich;
})(sandwichMaker || {});