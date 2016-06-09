angular.module('blogService', []).service('BlogService', ['$http', function($http) {
    
    this.getPosts = function() {
      var url = ghost.url.api('posts', {limit: 5});
      return $http.get(url);
    };
    

}]);

