'use strict';

var app = angular.module("mushroomTime", ["ngRoute"]);

app.config(function($routeProvider) { 
  $routeProvider.
  when('/', {
    templateUrl: "/partials/mushroomList.html",
    controller: "mushroomCtrl"
  })
  .otherwise("/");
});

app.run(($location, FBCreds) => {
    let creds = FBCreds;
    let authConfig = {
        apiKey: creds.apiKey,
        authDomain: creds.authDomain,
    databaseURL: creds.databaseURL
    };
});