		angular.module('mainController', []).controller("mainController", ['$scope', 'ngDialog', function($scope, ngDialog){
			$scope.open = function () {
              ngDialog.open({ template: 'pages/contact.html',
               className: 'ngdialog-theme-default',
                controller: 'contactController' });
          };
		}]);	

