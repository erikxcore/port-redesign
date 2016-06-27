     (function () {
    'use strict';

    angular.module('materializeApp').controller('contactController',['$scope','vcRecaptchaService', function($scope,vcRecaptchaService){
          $scope.pageClass = 'page-contact';
          $scope.success = false;
          $scope.error = false;
          
                $scope.response = null;
                $scope.widgetId = null;
                $scope.captcha = false;
                
                $scope.model = {
                   key:'6LfFCCITAAAAAKZFsUmUCKBXv5tzqjnBdZ_-1NDL'
                };

                $scope.setResponse = function (response) {
                    $scope.response = response;
                    $scope.captcha = true;
                };

                $scope.setWidgetId = function (widgetId) {
                    $scope.widgetId = widgetId;
                };

                $scope.cbExpiration = function() {
                    vcRecaptchaService.reload($scope.widgetId);
                    $scope.response = null;
                 };

                 
      }]);

    angular.module('materializeApp').controller("contactForm", ['$scope','ContactService','vcRecaptchaService', function($scope, ContactService, vcRecaptchaService) {
    $scope.success = false;
    $scope.error = false;
    $scope.submitted = false;
   

    $scope.sendMessage = function( input ) {
      input.submit = true;
      input.google_response = $scope.response;

      ContactService.sendEmail(input).then(function (response){
        $scope.submitted = true;
        if ( response.data.success ) {
          $scope.success = true;
        } else {
          $scope.error = true;
          vcRecaptchaService.reload($scope.widgetId);
        }
      }, function (error){
          $scope.submitted = true;
          $scope.error = true;
          vcRecaptchaService.reload($scope.widgetId);
      });

    }

  }]);

    })();