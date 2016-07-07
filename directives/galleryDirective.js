(function () {
    'use strict';

angular.module('materializeApp').directive('gallery', ['$timeout' ,function(timer){
    var linker = function(scope,element,attrs) {
            var attachToLinks = function() {
                var gallery_row = angular.element(element[0].querySelector('.gallery-row'));
                var zoom_row = angular.element(element[0].querySelector('.zoom-row'));
                var images =  angular.element(element[0].querySelectorAll('.gallery-row .mix figure .image'));
                var cancel = angular.element(element[0].querySelector('.gallery-close'));
                var menu = angular.element(document).find('.menu-toggle');
                var body = angular.element(document).find('body');

                for(var i = 0; i < images.length ; i++){
                    images[i].addEventListener('click', function(){
                        var itemID = this.id
                        gallery_row.addClass('item_open');
                        var ngimage = angular.element(this);
                        ngimage.addClass('item_open')
                        zoom_row.find('#'+this.id).addClass('item_open');
                        cancel[0].style.display = 'block';
                        menu[0].style.display = 'none';
                        body.addClass('fixScroll');
                    return false;
                    });
                };

                cancel.bind('click',function(){
                        gallery_row.removeClass('item_open');
                        body.removeClass('fixScroll');
                        var ports = angular.element(element[0].querySelectorAll('.port'));
                        ports.removeClass('item_open');
                        cancel[0].style.display = 'none';
                        menu[0].style.display = 'block';
                    return false;
                });

            }
            timer(attachToLinks, 0);
    };
    return {
        restrict:'A',
        link: linker
    }
}]);

})();