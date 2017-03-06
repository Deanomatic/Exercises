'use strict';
// always declare app variable for a new angular module. 
// And in app.js control the route and the views
var app = angular.module("mushroomTime", ["ngRoute"]);

app.config(function($routeProvider) { 
  $routeProvider.
  when('/', {
    templateUrl: "/partials/mushroomList.html",
    controller: "mushroomCtrl"
  })
  .otherwise("/");
});
//app.run is authintecating thru FBCreds using firebase.
app.run(($location, FBCreds) => {
    let creds = FBCreds;
    let authConfig = {
        apiKey: creds.apiKey,
        authDomain: creds.authDomain,
    databaseURL: creds.databaseURL
    };
});