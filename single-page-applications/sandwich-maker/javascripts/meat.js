var sandwichMaker = (function(originalSandwich){
	var meatCost = {
		"smoked-bacon": 7.00,
		"slab-bacon":10.00,
		"canadian-bacon": 15.00,
		"just-bacon": 2.00
	}
	originalSandwich.getMeatCost = function(meat) {
		return meatCost[meat];
	}
	return originalSandwich;
})(sandwichMaker || {});