(function () {
    'use strict';

		angular.module('materializeApp').controller('AboutController', ['$scope', 'uiGmapIsReady' , function($scope, isReady){
			    $scope.pageClass = 'page-about';
				$scope.mapIsLoaded = false;

				$scope.$emit('currentPage', $scope.pageClass);

				var styleArray = [
			          {
			              featureType: "all",
			              stylers: [
			                { saturation: -80 }
			              ]
			          }, {
			              featureType: "road.arterial",
			              elementType: "geometry",
			              stylers: [
			                { hue: "#00ffee" },
			                { saturation: 50 }
			              ]
			          }, {
			              featureType: "poi.business",
			              elementType: "labels",
			              stylers: [
			                { visibility: "off" }
			              ]
			          }
			    ];

				var mapOptions = {
				    styles: styleArray,
					disableDefaultUI: true
				}

				$scope.map = {
					center : {
				    latitude: 41.140409,
				    longitude: -74.6704378
				   	},
				   	zoom : 13,
				   	control : {},
					options : mapOptions
				};

				  $scope.markers = [{
			        id: 0,
			        coords: {
			            latitude: 41.1220409,
			            longitude: -74.5804378
			        }
			    }];

			    isReady.promise().then(function (maps) {
			        $scope.mapIsLoaded = true;
			       	$scope.$applyAsync(function(){
			       	 	google.maps.event.trigger(maps[0].map, 'resize');
			       	 });
			    });


			    $scope.zoomIn = function(){
			    	$scope.map.control.getGMap().setZoom($scope.map.control.getGMap().getZoom() + 1)
			    };

			    $scope.zoomOut = function(){
			    	$scope.map.control.getGMap().setZoom($scope.map.control.getGMap().getZoom() - 1)
			    };


		}]);

})();