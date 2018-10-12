angular.module('app').component('logout', {
	bindings: {},
	controller: function($location, auth) {
		console.log('hey!')
		auth.logout();

		$location.path('/login');
	},
});
