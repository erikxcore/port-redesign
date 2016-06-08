 //Services

angular.module('BlogService', []).factory('Blog', ['$http', function($http) {
    
    this.getPosts = function() {
      /*
        $.ajaxPrefilter( function (options) {
          if (options.crossDomain && jQuery.support.cors) {
            var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
            options.url = http + '//66.150.214.52:8001/' + options.url;
          }
        });

        $.ajax({
            type: 'GET',
            datatype: 'xml',
            crossDomain: true,
            url: 'http://66.150.214.52:2368/rss/',
            error: function (textStatus, error) {
                $('#viewer').text('Error fetching feed :/');
            },
            success: function (data) {
                $("#viewer").html();
                $(data).find("item").each(function(){
                    $("#viewer").append("Title : " + ($(this).find('title').text()));
                    $("#viewer").append("<br/>");
                    $("#viewer").append("Post : " + ($(this).find('encoded').text()));
                    $("#viewer").append("<br/>");
                });
            }
        });
      */
        //return $http.get('/goats');
    };
    
    this.getPost = function(name) {
        //return $http.get('/goat/' + name);
    };

}]);