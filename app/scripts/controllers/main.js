'use strict';

/**
 * @ngdoc function
 * @name cloakedOctoAvengerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cloakedOctoAvengerApp
 */
angular.module('cloakedOctoAvengerApp')
  .controller('MainCtrl', function($scope) {

    $scope.User = {
		id: 0,
		firstName: 'John',
		surname: 'Smith',
		email: 'jsmith@example.com',
		phoneNumber: '+353 85 123 4567',
		address: {
			addressLine1: '1 Main Street',
			addressLine2: '',
			town: 'Dublin 1',
			county: 'Dublin',
			postCode: '123 456'
		}
    };

    $scope.Utility = [
    	{
			id: 1,
			name: 'Electric Ireland',
			email: 'simonjfinney@gmail.com'
		}
	];

    var UserUtility = [
    	{
			id: 2,
			userId: 0,
			utilityId: 1,
			accountNumber: '12345'
		}
	];

    $scope.address = angular.copy($scope.User.address);
    
    $scope.changeAddress = function() {
    	var oldAddress = $scope.User.address;
    	$scope.User.address = $scope.address;
    	contactUtility(oldAddress, $scope.User.address);
    };


    function contactUtility(oldAddress, newAddress) {

    	// TODO   	
    	var accountNumberArray = [];
    	var utilityEmailArray = [];

    	_.each(UserUtility, function(userUtility) {

    		if (userUtility.userId === $scope.User.id) {

    			accountNumberArray.push(userUtility.accountNumber);

    			_.each($scope.Utility, function(utility) {

    				if (utility.id === userUtility.utilityId) {

    					utilityEmailArray.push(utility.email);
    				}
    			});
    		}
    	});
    }
  });
