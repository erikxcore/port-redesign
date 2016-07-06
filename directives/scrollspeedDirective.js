(function () {
    'use strict';


angular.module('materializeApp').directive('scrollspeed',function(){
    var linker = function(scope,element,attrs) {

       angular.element(document).ready(function () {
               jQuery.scrollSpeed(100, 800);
        });

    };
    return {
        restrict:'A',
        link: linker
    }
});

})();