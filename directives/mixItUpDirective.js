(function () {
    'use strict';

angular.module('materializeApp').directive('mixItUp',function(){
    var linker = function(scope,element,attrs) {
                scope.$watch('entities', function(){
                    angular.element(document).ready(function () {
                    //    $(window).load(function() { //mixitup already requires jquery and is a jquery plugin, so why not use jquery to wait for page load
                //            alert(element + " this is dat alert");
                            element.mixItUp({
                                animation: {
                                    animateResizeContainer: false //true causes issues with responsiveness
                                }
                            });
                   //     });
                    });
                  });
    };
    return {
        restrict:'A',
        link: linker,
        scope:{entities:'='}
    }
});

})();