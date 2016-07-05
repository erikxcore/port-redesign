(function () {
    'use strict';

		angular.module('materializeApp').controller('HomeController', function($scope){
    		$scope.pageClass = 'page-home';
    		$scope.$emit('currentPage', $scope.pageClass);
		});

})();