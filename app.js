(function () {
    'use strict';

angular.module('materializeApp', 
  ['ui.materialize',
  'ui.router',
  'ngDialog',
  'ngAnimate',
  'uiGmapgoogle-maps',
  'angular-parallax',
  'vcRecaptcha'
]);

angular.module('materializeApp').config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyCE5-7NSqY4p5lecnY5DQWRotAzvhYVXS4',
        v: '3.20',
        libraries: 'weather,geometry,visualization'
    });
});

angular.module('materializeApp').config(['ngDialogProvider',function(ngDialogProvider) {
    ngDialogProvider.setDefaults({
        className: "ngdialog-theme-default",
        plain: false,
        showClose: true,
        closeByDocument: true,
        closeByEscape: true
    });
  }
]);

})();