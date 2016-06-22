		angular.module('mainController', []).controller("mainController", ['$scope', 'ngDialog', 'preloader','$location', function($scope, ngDialog, preloader,$location){
      $scope.toggleMenu = false;
      $scope.isLoading = true;
      $scope.isSuccessful = false;
      //$scope.percentLoaded = 0;

/*
      $scope.$on("mouseEvent", function (event, args) {
        console.log("Main controller has captured an alert from mouse event from " + args.pageClass);

         $scope.pageClass = args.pageClass;
         var scroller = angular.element(document.querySelector('.mouse-scroll-container'));

         if(args.pageClass != "page-home" && scroller.hasClass('hidden')){
          $scope.toggleMouse();
          console.log('Mouse toggled because we are not on home and it is hidden');
         }

      });
*/
			$scope.openContact = function () {
              ngDialog.open({ template: 'pages/contact.html',
               className: 'port-theme',
               	cache: false,
                  controller: 'contactController' });
      };

/*
      $scope.toggleMouse = function(){
        console.log('Mouse toggled!');
          		var scroller = angular.element(document.querySelector('.mouse-scroll-container'));
          		if(scroller.hasClass('hidden')){
                console.log('Mouse appeared');
          			scroller.removeClass('hidden');
          		}else{
                console.log('Mouse hid');
          			scroller.addClass('hidden');
          		}
      };
*/
            $scope.imageLocations = [
            "assets/img/new2/1l_mountain.png",
            "assets/img/new2/1r_mountain.png",
            "assets/img/new2/2l_mountain.png",
            "assets/img/new2/2r_mountain.png",
            "assets/img/new2/birds.png",
            "assets/img/new2/boat.png",
            "assets/img/new2/bubbles.png",
            "assets/img/new2/center_mountain.png",
            "assets/img/new2/clouds.png",
            "assets/img/new2/cr_mountain.png",
            "assets/img/new2/reflection.png",
            "assets/img/new2/stars.png",
            "assets/img/new2/sun.png",
            "assets/img/new2/whale.png",
            "assets/img/new2/woods.png",

            "assets/img/me_large.JPG",
            "assets/img/mountains.jpeg",
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
                           $scope.percentLoaded = 'I\'ve seen things you people wouldn\'t believe.'
                        }else if(event.percent == 20){
                          $scope.percentLoaded = 'Attack ships on fire off the shoulder of Orion.'
                        }else if(event.percent == 40){
                          $scope.percentLoaded = 'I watched C-beams glitter in the dark near the Tannhauser gate.'
                        }else if(event.percent == 60){
                          $scope.percentLoaded = 'All those moments will be lost in time...'
                        }else if(event.percent == 80){
                          $scope.percentLoaded = 'like tears in rain...'
                        }else if(event.percent == 100){
                          $scope.percentLoaded = 'Time...to disappear.' //Because 'dying' is a little bleak, eh?
                        }

                    }
              );
		}]);	

