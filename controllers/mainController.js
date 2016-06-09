		angular.module('mainController', []).controller("mainController", ['$scope', 'ngDialog', function($scope, ngDialog){
    		 //$scope.pageClass = 'page-home';

			$scope.main = "main test";

			$scope.open = function () {
              ngDialog.open({ template: 'pages/contact.html',
               className: 'ngdialog-theme-default',
                controller: 'contactController' });
          };

		}]);	

