angular.module('materializeApp').directive('mixItUp',function(){
    var linker = function(scope,element,attrs) {
        scope.$watch('entities', function(){
            //potential issue on page load occasionally
            element.mixItUp();
        });
    };
    return {
        restrict:'A',
        link: linker,
        scope:{entities:'='}
    }
});