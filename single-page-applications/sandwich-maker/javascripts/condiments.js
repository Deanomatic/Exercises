var sandwichMaker = (function(originalSandwich){
	var conCost = {
		"hot-sauce": 7.00,
		"soy-sauce":10.00,
		"fish-paste": 15.00,
		"ranch": 2.00
	}
	originalSandwich.getConCost = function(con) {
		return conCost[con];
	}
	return originalSandwich;
})(sandwichMaker || {});