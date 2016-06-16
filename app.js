angular.module('materializeApp', 
  ['ui.materialize',
  'ui.router',
  'ngDialog',
  'ngAnimate',
  'uiGmapgoogle-maps',
  'angular-parallax',
  'angular-timeline',
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

angular.module('materializeApp').config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'your api key',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
})