		angular.module('mainController', []).controller("mainController", ['$scope', 'ngDialog', 'preloader', function($scope, ngDialog, preloader){
      $scope.toggleMenu = false;
      $scope.isLoading = true;
      $scope.isSuccessful = false;
      $scope.percentLoaded = 0;

			$scope.openContact = function () {
              ngDialog.open({ template: 'pages/contact.html',
               className: 'port-theme',
               	cache: false,
                  controller: 'contactController' });
      };

      $scope.toggleMouse = function(){
          		//alert('toggle');
          		var scroller = angular.element(document.querySelector('.mouse-scroll-container'));
          		if(scroller.hasClass('hidden')){
          			scroller.removeClass('hidden');
          		}else{
          			scroller.addClass('hidden');
          		}
      };

            $scope.imageLocations = [
            "assets/img/background.png",
             "assets/img/boat.png",
              "assets/img/first_tier.png",
               "assets/img/horizon.png",
                "assets/img/me_large.JPG",
                 "assets/img/mountains.jpeg",
                  "assets/img/paint_drop.png",
                   "assets/img/second_tier.png",
                    "assets/img/sky.png",
                     "assets/img/third_tier.png"
            ];

            preloader.preloadImages( $scope.imageLocations )
            .then(
                    function handleResolve( imageLocations ) {
                        $scope.isLoading = false;
                        $scope.isSuccessful = true;
                    },
                    function handleReject( imageLocation ) {
                        $scope.isLoading = false;
                        $scope.isSuccessful = false;
                        console.error( "Image Failed to load : ", imageLocation );
                    },
                    function handleNotify( event ) {
                        $scope.percentLoaded = event.percent;
                    }
              );
		}]);	

