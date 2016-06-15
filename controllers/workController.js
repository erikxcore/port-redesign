		angular.module('workController', []).controller('workController', function($scope){
    		$scope.pageClass = 'page-work';

    		  $scope.categories = ['Soft', 'Elements'];

				    $scope.drawings = [{
				        name: 'Water',
				        category: 'Elements',
				        value: '2',
				        id: '1'
				    }, {
				        name: 'Fire',
				        category: 'Elements',
				        value: '1',
				        id: '2'
				    }, {
				        name: 'Air',
				        category: 'Elements',
				        value: '4',
				        id: '3'
				    }, {
				        name: 'Coton',
				        category: 'Soft',
				        value: '3',
				        id: '4'
				    }];
				    
		});