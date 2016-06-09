		angular.module('resumeController', []).controller('resumeController', ['$scope', function($scope){
    		$scope.pageClass = 'page-resume';

    		$scope.events = [{
    		   badgeClass: 'info',
    		   badgeIconClass: 'glyphicon-check',
    		   title: 'First heading',
    		   content: 'Some awesome content.'
    		 }, {
    		   badgeClass: 'warning',
    		   badgeIconClass: 'glyphicon-credit-card',
    		   title: 'Second heading',
    		   content: 'More awesome content.'
    		 }, {
    		   badgeClass: 'warning',
    		   badgeIconClass: 'glyphicon-credit-card',
    		   title: 'Third heading',
    		   content: 'Even awesome content.'
    		 }, {
    		   badgeClass: 'warning',
    		   badgeIconClass: 'glyphicon-credit-card',
    		   title: 'Fortth heading',
    		   content: 'Not so awesome content.'
    		 }
    		 ];

    		
		}]);