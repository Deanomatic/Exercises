"use strict";  

app.controller("mushroomCtrl", function($scope, mushFactory, FBCreds) {
	console.log("mushCtrl over and out?");

  mushFactory.getJSON()
  .then(function(mushroomCollection) {
    $scope.mushrooms = mushroomCollection;
  	console.log($scope.mushrooms);
  });

});
