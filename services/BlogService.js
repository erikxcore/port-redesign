(function () {
    'use strict';

angular.module('blogService', []).service('BlogService', ['$http', function($http) {
    this.getPosts = function() {
      var cors = "http://66.150.214.52:8001/"; 
      var url = ghost.url.api('posts', {limit: 5});
      return $http.get(cors+url);
    };
    this.getPostsViaPagination = function(pg) {
      var cors = "http://66.150.214.52:8001/";
      var url = ghost.url.api('posts', {page:pg, limit: 2});
      return $http.get(cors+url);
    };
    this.getPost = function(id) {
      var cors = "http://66.150.214.52:8001/"; 
      var url = ghost.url.api('posts/'+id);
      return $http.get(cors+url);
    };
}]);

})();