angular.module('materializeApp', 
  ['ui.materialize',
  'ui.router',
  'ngDialog',
  'ngAnimate',
  'uiGmapgoogle-maps',
  'angular-parallax',
  'routes',
  'mainController',
  'blogController',
  'contactController',
  'homeController',
  'aboutController',
  'resumeController',
  'workController',
  'contactForm',
  'blogService',
  'contactService',
  'vcRecaptcha'
]);

angular.module('materializeAppp', ['uiGmapgoogle-maps']).config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyCE5-7NSqY4p5lecnY5DQWRotAzvhYVXS4',
        v: '3.20',
        libraries: 'weather,geometry,visualization'
    });
})