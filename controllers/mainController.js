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
                        if(event.percent == 0){
                           $scope.percentLoaded = 'Initiating hyper-drive.'
                        }else if(event.percent == 20){
                          $scope.percentLoaded = 'Putting away clothes.'
                        }else if(event.percent == 40){
                          $scope.percentLoaded = 'Asking mom for permission.'
                        }else if(event.percent == 60){
                          $scope.percentLoaded = 'She said to ask your father...'
                        }else if(event.percent == 80){
                          $scope.percentLoaded = 'Signs point to yes!'
                        }else if(event.percent == 100){
                          $scope.percentLoaded = 'We\'ve landed on the moon!.'
                        }

                    }
              );
		}]);	

