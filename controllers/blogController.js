(function () {
    'use strict';

      angular.module('materializeApp').controller("blogController", ['$scope', 'BlogService', '$sce', function($scope, BlogService, $sce){
      $scope.pageClass = 'page-blog';

      $scope.posts = [];
      $scope.busy = true;
      $scope.error = false;

      BlogService.getPosts().then(function (response){
        $scope.busy = false;
        angular.forEach(response.data.posts, function(post){
              	post.html = $sce.trustAsHtml(post.html);
			  });        
          $scope.posts = response.data.posts;
      }, function (error){
          $scope.busy = false;
          $scope.error = true;
      });


}]);

      })();