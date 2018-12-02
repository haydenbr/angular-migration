import * as angular from 'angular';

angular.module('app').component('adminLogin', {
	templateUrl: './admin-login.component.html',
	bindings: {},
	controller: adminLoginCtrl
});

adminLoginCtrl.$inject = ['$location', 'currentIdentity', 'auth', 'toastr']

function adminLoginCtrl($location, currentIdentity, auth, toastr) {
	this.loggedIn = currentIdentity.authenticated();

	if (this.loggedIn) {
		$location.path('/home');
	}

	this.login = function() {
		auth
			.login({
				username: this.email,
				password: this.password
			})
			.then(
				function() {
					$location.path('/home');
				},
				function(err) {
					toastr.error(err);
				}
			);
	};
}
