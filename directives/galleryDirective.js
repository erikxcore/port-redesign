angular.module('materializeApp').directive('gallery', ['$timeout' ,function(timer){
    var linker = function(scope,element,attrs) {
            var attachToLinks = function() {
                gallery_row = angular.element(element[0].querySelector('.gallery-row'));
                zoom_row = angular.element(element[0].querySelector('.zoom-row'));
                images =  angular.element(element[0].querySelectorAll('.gallery-row .mix .image'));
                cancel = angular.element(element[0].querySelector('.gallery-close'));

                for(var i = 0; i < images.length ; i++){
                    images[i].addEventListener('click', function(){
                        itemID = this.id
                        gallery_row.addClass('item_open');
                        ngimage = angular.element(this);
                        ngimage.addClass('item_open')
                        zoom_row.find('#'+this.id).addClass('item_open');
                        cancel[0].style.display = 'block';
                    return false;
                    });
                };

                cancel.bind('click',function(){
                        gallery_row.removeClass('item_open');
                        ports = angular.element(element[0].querySelectorAll('.port'));
                        ports.removeClass('item_open');
                        cancel[0].style.display = 'none';
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