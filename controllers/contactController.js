     angular.module('contactController', []).controller('contactController', function($scope){
          $scope.pageClass = 'page-contact';
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

    angular.module('contactForm', []).controller("contactForm", ['$scope','ContactService','vcRecaptchaService', function($scope, ContactService, vcRecaptchaService) {
    $scope.success = false;
    $scope.error = false;

    $scope.sendMessage = function( input ) {
      input.submit = true;
      input.google_response = $scope.response;

      ContactService.sendEmail(input).then(function (response){
        if ( response.data.success ) {
          $scope.success = true;
        } else {
          $scope.error = true;
          vcRecaptchaService.reload($scope.widgetId);
        }
      }, function (error){
          //console.log("Error occured - " + error);
          $scope.error = true;
          vcRecaptchaService.reload($scope.widgetId);
      });

    }

  }]);