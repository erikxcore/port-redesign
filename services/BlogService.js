angular.module('blogService', []).service('BlogService', ['$http', function($http) {
    this.getPosts = function() {
      var url = ghost.url.api('posts', {limit: 5});
      return $http.get(url);
    };
    this.getPostsViaPagination = function(pg) {
      var url = ghost.url.api('posts', {page:pg, limit: 2});
      return $http.get(url);
    };
    this.getPost = function(id) {
      var url = ghost.url.api('posts/'+id);
      return $http.get(url);
    };
}]);

