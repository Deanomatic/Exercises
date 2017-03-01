"use strict";

app.controller('travelCtrl', function($scope, bookFactory){
	let printBooks = function() {
		console.log("oyoyoyoyoy");
		bookFactory.getBooks()
		.then(function(guides) {
			console.log("yo what up dawg!!", guides.data.guides);
			$scope.guides = guides.data.guides;
			console.log($scope.guides);
		});
	};

	printBooks();
});