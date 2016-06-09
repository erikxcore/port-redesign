      angular.module('blogController', []).controller("blogController", ['$scope', 'BlogService', '$sce', function($scope, BlogService, $sce){
      $scope.pageClass = 'page-blog';
      
      $scope.posts = [];

      BlogService.getPosts().then(function (response){
      	Response = response;
      	//console.log("Response - " + response);
              angular.forEach(response.data.posts, function(post){
              	post.html = $sce.trustAsHtml(post.html);
			  });        
          $scope.posts = response.data.posts;
      }, function (error){
          //console.log("Error occured - " + error);
          $scope.error = true;
      });


      }]);