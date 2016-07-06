(function () {
    'use strict';

  	angular.module('materializeApp').controller("MainController", ['$scope', 'ngDialog', 'preloader','$location', function($scope, ngDialog, preloader,$location){
      $scope.toggleMenu = false;
      $scope.isLoading = true;
      $scope.isSuccessful = false;

      $scope.$on('currentPage', function (event, data) {
        $scope.pageClass = data;
      });

			$scope.openContact = function () {
              ngDialog.open({ template: 'pages/contact.html',
               className: 'port-theme',
               	cache: false,
                  controller: 'ContactController' });
      };

            $scope.imageLocations = [
              "assets/img/bg/1l_mountain.png",
              "assets/img/bg/1r_mountain.png",
              "assets/img/bg/2l_mountain.png",
              "assets/img/bg/2r_mountain.png",
              "assets/img/bg/birds.png",
              "assets/img/bg/boat.png",
              "assets/img/bg/bubbles.png",
              "assets/img/bg/center_mountain.png",
              "assets/img/bg/clouds.png",
              "assets/img/bg/cr_mountain.png",
              "assets/img/bg/reflection.png",
              "assets/img/bg/stars.png",
              "assets/img/bg/sun.png",
              "assets/img/bg/whale.png",
              "assets/img/bg/woods.png",

              "assets/img/work/mediacominmotion.png",
              "assets/img/work/old_portfolio.png",
              "assets/img/work/ossapps.png",
              "assets/img/work/salerizer.png",
              "assets/img/work/security.png",
              "assets/img/work/self_install.png",
              "assets/img/work/servers.png",
              "assets/img/work/sharepoint.png",
              "assets/img/work/shirt.png",
              "assets/img/work/swell.png",
              "assets/img/work/tom_haas.png",
              "assets/img/work/travel.png",
              "assets/img/work/maestro.png",
              "assets/img/work/lemcor.png",
              "assets/img/work/infographic.png",
              "assets/img/work/grlr.png",
              "assets/img/work/fiber.png",
              "assets/img/work/fatherjohns.png",
              "assets/img/work/dshbrd.png",
              "assets/img/work/cntrfld.png",
              "assets/img/work/csgo.png",

              "assets/img/me_large.jpg",
              "assets/img/mountains.jpg",
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
                        if(event.percent <= 0 && event.percent < 20){
                           $scope.percentLoaded = 'I\'ve seen things you people wouldn\'t believe.';
                        }else if(event.percent >= 20 && event.percent < 40){
                          $scope.percentLoaded = 'Attack ships on fire off the shoulder of Orion.';
                        }else if(event.percent >= 40 && event.percent < 60){
                          $scope.percentLoaded = 'I watched C-beams glitter in the dark near the Tannhauser gate.';
                        }else if(event.percent >= 60 && event.percent < 80){
                          $scope.percentLoaded = 'All those moments will be lost in time...';
                        }else if(event.percent >= 80 && event.percent < 100){
                          $scope.percentLoaded = 'like tears in rain...';
                        }else if(event.percent == 100){
                          $scope.percentLoaded = 'Time...to disappear.'; //Because 'dying' is a little bleak, eh?
                        }

                    }
              );
		}]);	

})();