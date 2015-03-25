'use strict';

var User = [
	{
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
	}
];

var Utility = [
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