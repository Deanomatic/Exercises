"use strict"; 
//All I need to do is declare app is an agular module. it has nothing really to do yet.
let app = angular.module("guidesGalore", ["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider.
	when("/", {
		templateUrl: "/partials/bookList.html",
		controller: "travelCtrl"
	})
	.otherwise("/");
});