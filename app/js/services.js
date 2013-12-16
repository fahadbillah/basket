'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
	.value('version', '0.1')
  .factory('product',['$http','$q', function($http,$q){
  	return {
      name: 'product',
      readonly: false,
      getProducts: function() {
        var deferred = $q.defer();                       
		    var link = "products/list.json";
		    $http.get(link).success(function(data) {
		      deferred.resolve(data);
		    }).error(function(){
		      deferred.reject();
		    });
				return deferred.promise;
      }
    };
  }]);
