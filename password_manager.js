console.log('Starting password manager');

var storage = require('node-persist');
storage.initsync();

	storage.setItemSync('accounts', [{
			username: 'manas',
			balance: 100
	}]);
	
var accounts = storage.getItemSync('accounts');

//push on new accounts
	accounts.push({
		username: 'jen',
		balance:: 75
	})