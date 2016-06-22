angular.module('materializeApp').directive('scrollTrigger', function() {
 var linker = function(scope,element,attrs) {
            var raw = element[0];
            console.log('loading directive');
            element.bind('scroll', function () {
                console.log('in scroll');
                console.log(raw.scrollTop + raw.offsetHeight);
                console.log(raw.scrollHeight);
                if (raw.scrollTop + raw.offsetHeight > raw.scrollHeight) { //at the bottom
                    scope.$apply(attrs.scrolly);
                }
            })
        }
      
    };
  return {
    scope: true,
    restrict: 'A',
    link: linker
  }
});