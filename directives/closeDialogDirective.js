    (function () {
    'use strict';


angular.module('materializeApp').directive('closeDialog', function($timeout, ngDialog) {
 var linker = function(scope,element,attrs) {
      
      element.bind('click', function(element) {
        $timeout(function(){
          ngDialog.closeAll();
          scope.$destroy();
        }, attrs.closeDialog * 1000);
      });
      
    };
  return {
    scope: true,
    link: linker
  }
});


    })();