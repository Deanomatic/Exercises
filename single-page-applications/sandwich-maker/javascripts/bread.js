var sandwichMaker = (function(originalSandwich){
	var breadCost = {
		"rye-bread": 7.00,
		"pita":10.00, 
		"toast": 15.00,
		"pumpernickel": 2.00
	}
	originalSandwich.getBreadCost = function(bread) {
		return breadCost[bread];
	}
	return originalSandwich;
})(sandwichMaker || {});