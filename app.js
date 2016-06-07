//app.js

var app = angular.module('materializeApp', ['ui.materialize','ngRoute']);

app.controller('mainController', function($scope){
	$scope.message = "This is just a test from the main controller."
});

app.config(function($routeProvider) {
        $routeProvider

            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })

            .when('/blog', {
                templateUrl : 'pages/blog.html',
                controller  : 'blogController'
            })

            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            });
    });