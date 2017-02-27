"use strict"; 
							//parameters are inside to give access to them outside.
app.controller('travelCtrl', ($scope, $http, $q) => {

	function main() {
		console.log("Do I control stuff??");
		$q((resolve, reject) => {//Creating a promise
			$http.get("../guides.json")
			.then(function (booksObj) {
				$scope.guides = booksObj.data.guides;
				resolve();
			}).catch((error) => {
				console.log("What's wrong??");
				reject(error);
			});
		});
	}

	main();
});