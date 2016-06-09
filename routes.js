angular.module('routes', []).config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider

            .state('about', {
                url: '/about',
                templateUrl: 'pages/about.html',
                controller: 'aboutController'
            })

            .state('blog', {
                url: '/blog',
                templateUrl: 'pages/blog.html',
                controller: 'blogController'
            })

            .state('contact', {
                url: '/contact',
                templateUrl: 'pages/contact.html',
                controller: 'contactController'
            })

            .state('home', {
                url: '/home',
                templateUrl: 'pages/home.html',
                controller: 'homeController'
            })

            .state('resume', {
                url: '/resume',
                templateUrl: 'pages/resume.html',
                controller: 'resumeController'
            })

            .state('work', {
                url: '/work',
                templateUrl: 'pages/work.html',
                controller: 'workController'
            });


});


