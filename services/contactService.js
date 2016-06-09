  //Services

angular.module('contactService', []).service('ContactService', ['$http', function($http) {
    
    this.sendEmail = function(input) {
    	return $http({
          method: 'POST',
          url: 'assets/php/mailer.php',
          data: input,
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      });
    };



}]);