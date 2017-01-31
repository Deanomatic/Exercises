var sandwichMaker = (function(originalSandwich){
	var vegCost = {
		"garden-cress": 7.00,
		"lettuce":10.00,
		"arugula": 15.00,
		"dill": 2.00
	}
	originalSandwich.getVegCost = function(veggie) {
		return vegCost.veggie;
	}
	return originalSandwich;
})(sandwichMaker || {});