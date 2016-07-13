(function () {
    'use strict';

angular.module('materializeApp').config(function($stateProvider, $urlRouterProvider,$locationProvider) {
        
    $stateProvider

            .state('about', {
                url: '/about',
                templateUrl: 'pages/about.html',
                controller: 'AboutController'
            })

            .state('blog', {
                url: '/blog',
                templateUrl: 'pages/blog.html',
                controller: 'BlogController'
            }) 
            
            .state('home', {
                url: '/home',
                templateUrl: 'pages/home.html',
                controller: 'HomeController'
            })

            .state('resume', {
                url: '/resume',
                templateUrl: 'pages/resume.html',
                controller: 'ResumeController'
            })

            .state('work', {
                url: '/work',
                templateUrl: 'pages/work.html',
                controller: 'WorkController'
            });

    $urlRouterProvider.otherwise('/home');
    $locationProvider.html5Mode(true); // Requires $locationProvider dependecy. This would work great if you use a .htaccess file to redirect all traffic to index if it doesn't exist (because the real location of site/blog isn't actually available).


});

})();