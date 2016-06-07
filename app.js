//app.js

var app = angular.module('materializeApp', ['ui.materialize','ngRoute','vcRecaptcha']);

app.config(function($routeProvider, $locationProvider) {
        $routeProvider

            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            .when('/home', {
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

            /*
            <!--Unfortunately with GoDaddy this would not be possible - requires URL rewriting on the server to allow users to bookmark, etc.
            <!--Non-issue for this site, but, if we wanted to retain a static URL as to not cause 404 on bookmarked 'pages' we should use the UI router rather than the route router. 
            The UI router is better for templating as it offers parent/children views as well as multiple views inside of a template, it is better for complex applications rather than simple ngRoute based ones.-->
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });    
            */
});




//Controllers
    	app.controller('mainController', function($scope){
    		$scope.message = "This is just a test from the main controller."
    	});

      app.controller('aboutController', function($scope){
        $scope.message = "This is just a test from the about controller."
      });

      app.controller('blogController', function($scope){
        $scope.message = "This is just a test from the blog controller."
      });

      app.controller('contactController', function($scope, vcRecaptchaService){
                $scope.response = null;
                $scope.widgetId = null;

                $scope.model = {
                   key:'6LfFCCITAAAAAKZFsUmUCKBXv5tzqjnBdZ_-1NDL'
                };

                $scope.setResponse = function (response) {
                    //console.info('Response available' + response);
                    $scope.response = response;
                };

                $scope.setWidgetId = function (widgetId) {
                    //console.info('Created widget ID: %s', widgetId);
                    $scope.widgetId = widgetId;
                };

                $scope.cbExpiration = function() {
                    //console.info('Captcha expired. Resetting response object');
                    vcRecaptchaService.reload($scope.widgetId);
                    $scope.response = null;
                 };



      });

    app.controller("contactForm", ['$scope', '$http', 'vcRecaptchaService', function($scope, $http, vcRecaptchaService) {
    $scope.success = false;
    $scope.error = false;

    $scope.sendMessage = function( input ) {
      input.submit = true;
      input.google_response = $scope.response;
      $http({
          method: 'POST',
          url: 'assets/php/mailer.php',
          data: input,
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      })
      .success( function(data) {
        if ( data.success ) {
          $scope.success = true;
        } else {
          $scope.error = true;
          vcRecaptchaService.reload($scope.widgetId);
        }
      }).error(function(data){
        $scope.error = true;
        vcRecaptchaService.reload($scope.widgetId);
      });
    }
  }]);

    