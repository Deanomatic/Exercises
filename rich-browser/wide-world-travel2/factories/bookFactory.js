"use strict"; 
							//parameters are inside to give access to them outside.
app.factory('bookFactory', function($http, $q) {

	function getBooks() {
		console.log("Do I control stuff??");
		return $q((resolve, reject) => {//Creating a promise
			$http.get("../guides.json")
			.then(function (booksObj) {
				resolve(data);
			})
			.catch(() => {
				console.log("What's wrong??");
				reject();
			});
		});
	}

	return {getBooks};
});