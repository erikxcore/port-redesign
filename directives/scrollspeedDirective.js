(function () {
    'use strict';


angular.module('materializeApp').directive('scrollspeed',function(){
    var linker = function(scope,element,attrs) {

       angular.element(document).ready(function () {

               var is_safari = navigator.userAgent.indexOf("Safari") > -1;
                
                if(!is_safari){    
               jQuery.scrollSpeed(100, 800);
                }
        });

    };
    return {
        restrict:'A',
        link: linker
    }
});

})();
