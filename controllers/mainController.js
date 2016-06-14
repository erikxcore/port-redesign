		angular.module('mainController', []).controller("mainController", ['$scope', 'ngDialog', function($scope, ngDialog){
			$scope.openContact = function () {
              ngDialog.open({ template: 'pages/contact.html',
               className: 'port-theme',
               	cache: false,
                  controller: 'contactController' });
          	};
          	$scope.toggleMenu = false;

          	$scope.toggleMouse = function(){
          		alert('toggle');
          		var scroller = angular.element(document.querySelector('.mouse-scroll-container'));
          		if(scroller.hasClass('hidden')){
          			scroller.removeClass('hidden');
          		}else{
          			scroller.addClass('hidden');
          		}
          	};
		}]);	


