(function () {
    'use strict';

angular.module('materializeApp').directive('jInvertScroll',function(){
    var linker = function(scope,element,attrs) {
            jQuery.jInvertScroll(['.scroll'],
            {
            onScroll: function(percent) {
            }
        });         
    };
    return {
        restrict:'A',
        link: linker,
        controller: function ($scope) {
            $scope.$on('$locationChangeStart', function(event) {
                 jQuery.jInvertScroll().destroy();                               
            });
        },
    }
});

})();