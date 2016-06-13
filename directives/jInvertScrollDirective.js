angular.module('materializeApp').directive('jInvertScroll',function(){
    var linker = function(scope,element,attrs) {
            //No other way to initialize...
            jQuery.jInvertScroll(['.scroll'],
            {
            onScroll: function(percent) {
                //console.log(percent);
            }
        });         
    };
    return {
        restrict:'A',
        link: linker,
        controller: function ($scope) {
            $scope.$on('$locationChangeStart', function(event) {
                //No other way to destroy...
                //$.jInvertScroll().destroy(); 
                 jQuery.jInvertScroll().destroy();                               
            });
        },
    }
});