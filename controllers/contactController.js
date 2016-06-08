     angular.module('contactController', []).controller('contactController', function($scope, vcRecaptchaService){
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

    angular.module('contactForm', []).controller("contactForm", ['$scope', '$http', 'vcRecaptchaService', function($scope, $http, vcRecaptchaService) {
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