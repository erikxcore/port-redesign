      angular.module('blogController', []).controller("blogController", ['$scope', 'BlogService', '$sce', function($scope, BlogService, $sce){
      $scope.pageClass = 'page-blog';
      $scope.currentpage = 1;
      $scope.posts = [];
      $scope.busy = false;
      $scope.done = false;

      $scope.nextPage = function(){
        if($scope.busy) return;
        $scope.busy = true;

        BlogService.getPostsViaPagination($scope.currentpage).then(function (response){
        angular.forEach(response.data.posts, function(post){
                post.html = $sce.trustAsHtml(post.html);
                $scope.posts.push(post);
        });  
          if(response.data.posts.length == 0){
            $scope.done = true;
            return;
          } 
          $scope.busy = false;
          $scope.currentpage++;
      }, function (error){
          $scope.error = true;
      });
      };

      $scope.getAllPosts = function(){
      BlogService.getAllPosts().then(function (response){
              angular.forEach(response.data.posts, function(post){
              	post.html = $sce.trustAsHtml(post.html);
			  });        
          $scope.posts = response.data.posts;
      }, function (error){
          $scope.error = true;
      });
    }
}]);