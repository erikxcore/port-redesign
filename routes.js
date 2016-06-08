angular.module('routes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
         $routeProvider

         	/*no use in creating these controllers if we're not using anything yet*/
            .when('/home', {
                templateUrl : 'pages/home.html'//,
                //controller  : 'homeController'
            })

            .when('/about', {
                templateUrl : 'pages/about.html'//,
                //controller  : 'aboutController'
            })

            .when('/resume', {
                templateUrl : 'pages/resume.html'//,
                //controller  : 'resumeController'
            })

            .when('/work', {
                templateUrl : 'pages/work.html'//,
                //controller  : 'workController'
            })

            .when('/blog', {
                templateUrl : 'pages/blog.html'//,
                //controller  : 'blogController'
            })

            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            })

            .otherwise({ redirectTo: '/home' });
            /*
            <!--Unfortunately with GoDaddy this would not be possible - requires URL rewriting on the server to allow users to bookmark, etc.
            <!--Non-issue for this site, but, if we wanted to retain a static URL as to not cause 404 on bookmarked 'pages' we should use the UI router rather than the route router. 
            The UI router is better for templating as it offers parent/children views as well as multiple views inside of a template, it is better for complex applications rather than simple ngRoute based ones.-->
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });    
            */
}]);


