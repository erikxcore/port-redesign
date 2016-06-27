        (function () {
    'use strict';


angular.module('materializeApp').directive('viewport',function(){
    var linker = function(scope,element,attrs) {

       angular.element(document).ready(function () {

                element.addClass("hidden_novis").viewportChecker({
                    classToAdd: 'visible animated fadeIn',
                    //classToRemove: 'hidden_novis',
                    //removeClassAfterAnimation: true,
                    classToAddForFullView: '',
                    offset: 100,
                    repeat: true// due to how the ui state is rendered upon initial load all elements are already visible. my assumption is the content is scrolled into view
                });

        });

    };
    return {
        restrict:'A',
        link: linker
    }
});


        })();