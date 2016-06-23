angular.module('materializeApp').directive('mixItUp',function(){
    var linker = function(scope,element,attrs) {
                scope.$watch('entities', function(){
                    angular.element(document).ready(function () {
                        element.mixItUp({
                            animation: {
                                animateResizeContainer: false //true causes issues with responsiveness
                            }
                        });
                    });
                  });
    };
    return {
        restrict:'A',
        link: linker,
        scope:{entities:'='}
    }
});