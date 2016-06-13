		angular.module('mainController', []).controller("mainController", ['$scope', 'ngDialog', function($scope, ngDialog){
			$scope.openContact = function () {
              ngDialog.open({ template: 'pages/contact.html',
               className: 'port-theme',
               	cache: false,
                  controller: 'contactController' });
          };
		}]);	

