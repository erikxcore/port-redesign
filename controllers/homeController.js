		angular.module('homeController', []).controller('homeController', function($scope){
    		$scope.pageClass = 'page-home';
			$scope.$emit("mouseEvent", {pageClass: $scope.pageClass });
		});