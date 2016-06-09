//To get directives working be sure to include them after app.js and also don't pass arguements in .module
angular.module('materializeApp').directive('gallery',function(){
    var linker = function(scope,element,attrs) {

            console.log(element); //gets .galley-container object
            var gallery_row = element[0].querySelector('.gallery-row'); //angulr doesnt come with a way to get via class (could use jq)
            var zoom_row = element[0].querySelector('.zoom-row');
            

            //element[0].querySelector('.gallery-row').querySelector('a').bind('click', function(){

            console.log(gallery_row);
            console.log(zoom_row);
            //});



    };
    return {
        restrict:'A',
        link: linker,
        scope:{entities:'='}
    }
});

/*
 // convert this
 //.gallery-container .gallery-row .mix a on click
 //var itemID = this.attr('id');
//add class item open to .gallery-container .gallery-row
//add add class to itemid (item_open)
//return false to stop going to link -uneeded because we dont use href

 $('.gallery ul li a').click(function() {
     var itemID = $(this).attr('href');
     $('.gallery ul').addClass('item_open');
     $(itemID).addClass('item_open');
     return false;
 });

//.gallery-close on click
//remove item_open class from .port and .gallery-container .gallery-row
//return false

 $('.close').click(function() {
     $('.port, .gallery ul').removeClass('item_open');
     return false;
 });

//some kind of fade in animation? something.
 $(".gallery ul li a").click(function() {
     $('html, body').animate({
         scrollTop: parseInt($("#top").offset().top)
     }, 400);
 });
 */