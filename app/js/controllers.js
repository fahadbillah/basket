'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyBasket', ['$scope','product',function($scope,product) {
  	$scope.defaultPrice = "0.00";
  	$scope.disabled = true;
    product.getProducts().then(function(p){
  		$scope.productList = p;
    });

    $scope.vat = 0.2;

    $scope.delete = function(id){
    	$scope.productList.splice(id, 1);
    };
    
    $scope.subTotalPrice = 0;

    $scope.subTotal = function(){
    	var tempSubTotal = 0;
    	angular.forEach($scope.productList, function(item) {
        tempSubTotal += item.qty * item.price;
      });
      $scope.subTotalPrice = tempSubTotal;
    	return tempSubTotal;
    };

    $scope.totalVat = function(sub){
    	return sub*$scope.vat;
    };

    $scope.total = function(sub){
    	return sub+(sub*$scope.vat);
    };
  }]);