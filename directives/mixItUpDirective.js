angular.module('materializeApp').directive('mixItUp',function(){
    var linker = function(scope,element,attrs) {
        scope.$watch('entities', function(){
            element.mixItUp();
        });
    };
    return {
        restrict:'A',
        link: linker,
        scope:{entities:'='}
    }
});