(function () {
    'use strict';

		angular.module('materializeApp').controller('ResumeController', ['$scope', function($scope){
    		$scope.pageClass = 'page-resume';
    		$scope.$emit('currentPage', $scope.pageClass);
		}]);

})();